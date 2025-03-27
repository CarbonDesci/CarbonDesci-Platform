const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  contributor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['air_quality', 'water_quality', 'soil_quality', 'biodiversity', 'other'],
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  metadata: {
    type: Map,
    of: String
  },
  quality: {
    type: String,
    enum: ['raw', 'processed', 'validated'],
    default: 'raw'
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  reward: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
dataSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index for geospatial queries
dataSchema.index({ location: '2dsphere' });

const Data = mongoose.model('Data', dataSchema);

module.exports = Data; 