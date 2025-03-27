const express = require('express');
const router = express.Router();
const proposalController = require('../controllers/proposalController');
const auth = require('../middleware/auth');

router.post('/', auth, proposalController.createProposal);
router.get('/', proposalController.getAllProposals);
router.get('/:id', proposalController.getProposalById);
router.put('/:id', auth, proposalController.updateProposal);
router.delete('/:id', auth, proposalController.deleteProposal);
router.post('/:id/vote', auth, proposalController.voteProposal);

module.exports = router; 