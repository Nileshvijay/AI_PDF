const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
});

// Export the model
module.exports = mongoose.model('File', fileSchema);
