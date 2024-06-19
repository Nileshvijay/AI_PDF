const UploadModel = require('../model/UploadModel');

const IMG_BASE_URL = 'http://localhost:8080/'
const uploadFile =  (req, res) => {
  console.log(req.file.filename)
   UploadModel.create({
    image: IMG_BASE_URL + req.file.filename
  })
  .then(result => res.json({ success: true, data: result }))
    .catch(err => res.status(500).json({ success: false, error: err.message }));
};
module.exports = {
  uploadFile,
};
