const Data = require('../models/Data');
const User = require('../models/User');

exports.uploadData = async (req, res) => {
  try {
    const { title, description, type, location, metadata } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const data = new Data({
      title,
      description,
      type,
      location,
      metadata,
      contributor: req.user.userId,
      fileUrl: file.path,
      fileType: file.mimetype,
      fileSize: file.size
    });

    await data.save();

    // Update user's data contributions
    await User.findByIdAndUpdate(
      req.user.userId,
      { $push: { dataContributions: data._id } }
    );

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading data', error: error.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const data = await Data.find()
      .populate('contributor', 'name email')
      .sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

exports.getDataById = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id)
      .populate('contributor', 'name email');
    
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

exports.updateDataStatus = async (req, res) => {
  try {
    const { status, quality } = req.body;
    const data = await Data.findById(req.params.id);
    
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }

    if (status) data.status = status;
    if (quality) data.quality = quality;

    await data.save();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error updating data status', error: error.message });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }

    // Check if user is the contributor
    if (data.contributor.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this data' });
    }

    // Remove data from user's contributions
    await User.findByIdAndUpdate(
      req.user.userId,
      { $pull: { dataContributions: data._id } }
    );

    await data.remove();
    res.json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting data', error: error.message });
  }
}; 