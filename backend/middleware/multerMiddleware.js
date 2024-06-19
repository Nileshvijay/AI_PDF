const multer = require('multer');
const path = require('path');

const mstorage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file)
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, 'file.fieldname' + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: mstorage,
});

module.exports = upload;


