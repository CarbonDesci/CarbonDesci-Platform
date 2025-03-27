const express = require('express');
const router = express.Router();
const multer = require('multer');
const dataController = require('../controllers/dataController');
const auth = require('../middleware/auth');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/upload', auth, upload.single('file'), dataController.uploadData);
router.get('/', dataController.getAllData);
router.get('/:id', dataController.getDataById);
router.put('/:id/status', auth, dataController.updateDataStatus);
router.delete('/:id', auth, dataController.deleteData);

module.exports = router; 