const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerMiddleware'); // Path to your Multer configuration
const { uploadFile } = require('../controller/fileUploadController');

// POST route for file upload
router.post('/upload', upload.single('image'), uploadFile);

module.exports = router;
