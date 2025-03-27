const Proposal = require('../models/Proposal');

exports.createProposal = async (req, res) => {
  try {
    const proposal = new Proposal({
      ...req.body,
      researcher: req.user.userId
    });

    await proposal.save();
    res.status(201).json(proposal);
  } catch (error) {
    res.status(500).json({ message: 'Error creating proposal', error: error.message });
  }
};

exports.getAllProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find()
      .populate('researcher', 'name email')
      .sort({ createdAt: -1 });
    res.json(proposals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching proposals', error: error.message });
  }
};

exports.getProposalById = async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id)
      .populate('researcher', 'name email')
      .populate('votes.voter', 'name email');
    
    if (!proposal) {
      return res.status(404).json({ message: 'Proposal not found' });
    }
    res.json(proposal);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching proposal', error: error.message });
  }
};

exports.updateProposal = async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    
    if (!proposal) {
      return res.status(404).json({ message: 'Proposal not found' });
    }

    // Check if user is the researcher
    if (proposal.researcher.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to update this proposal' });
    }

    Object.assign(proposal, req.body);
    await proposal.save();

    res.json(proposal);
  } catch (error) {
    res.status(500).json({ message: 'Error updating proposal', error: error.message });
  }
};

exports.deleteProposal = async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    
    if (!proposal) {
      return res.status(404).json({ message: 'Proposal not found' });
    }

    // Check if user is the researcher
    if (proposal.researcher.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this proposal' });
    }

    await proposal.remove();
    res.json({ message: 'Proposal deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting proposal', error: error.message });
  }
};

exports.voteProposal = async (req, res) => {
  try {
    const { amount } = req.body;
    const proposal = await Proposal.findById(req.params.id);
    
    if (!proposal) {
      return res.status(404).json({ message: 'Proposal not found' });
    }

    // Add vote
    proposal.votes.push({
      voter: req.user.userId,
      amount
    });

    // Update funding received
    proposal.funding.received += amount;

    await proposal.save();
    res.json(proposal);
  } catch (error) {
    res.status(500).json({ message: 'Error voting on proposal', error: error.message });
  }
}; 