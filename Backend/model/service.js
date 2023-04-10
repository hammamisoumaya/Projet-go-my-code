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
  image: {
    type: String
    
  }

});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;