const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  },
  dateCreation: {
    type: Date,
    default: Date.now
  }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;