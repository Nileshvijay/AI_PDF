const UploadModel = require('../model/UploadModel');

const IMG_BASE_URL = 'http://localhost:8080/uploads/'; // Ensure this base URL matches the correct path to your uploads

const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const imageUrl = IMG_BASE_URL + req.file.filename;

  UploadModel.create({
    image: imageUrl
  })
  .then(result => res.json({ success: true, file: { filename: req.file.filename } }))
  .catch(err => res.status(500).json({ success: false, error: err.message }));
};

module.exports = {
  uploadFile,
};
