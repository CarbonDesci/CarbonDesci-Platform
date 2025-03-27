const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  researcher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'pending', 'approved', 'rejected', 'completed'],
    default: 'draft'
  },
  funding: {
    requested: {
      type: Number,
      required: true
    },
    received: {
      type: Number,
      default: 0
    }
  },
  dataRequirements: [{
    type: String,
    required: true
  }],
  methodology: {
    type: String,
    required: true
  },
  timeline: {
    startDate: Date,
    endDate: Date,
    milestones: [{
      description: String,
      deadline: Date,
      completed: {
        type: Boolean,
        default: false
      }
    }]
  },
  votes: [{
    voter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    amount: Number,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  results: {
    type: String
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
proposalSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Proposal = mongoose.model('Proposal', proposalSchema);

module.exports = Proposal; 