const express = require('express');
const router = express.Router();
const chargeController = require('../controllers/chargeController');
router.get('/', chargeController.showChargeList);
router.get('/add', chargeController.showChargeForm);
router.get('/edit/:chargeID', chargeController.showChargeEdit);
router.get('/desc/:chargeID', chargeController.showDescription);
router.get('/delete/:chargeID', chargeController.deleteCharge);

router.post('/edit/:chargeID', chargeController.updateCharge);
router.post('/add', chargeController.addCharge);
module.exports = router;