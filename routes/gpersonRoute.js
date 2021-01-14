const express = require('express');
const router = express.Router();
const gpersonController = require('../controllers/gpersonController');
router.get('/', gpersonController.showGpersonList);
router.get('/add', gpersonController.showGpersonForm);
router.get('/edit/:GpersonID', gpersonController.showGpersonEdit);
router.get('/desc/:GpersonID', gpersonController.showGpersonDesc);
router.get('/delete/:GpersonID', gpersonController.deleteGperson);

router.post('/edit/:GpersonID', gpersonController.updateGperson);
router.post('/add', gpersonController.addGperson);
module.exports = router;