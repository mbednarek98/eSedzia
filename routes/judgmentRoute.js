const express = require('express');
const router = express.Router();
const judgmentController = require('../controllers/judgmentController');
router.get('/', judgmentController.showJudgmentList);
router.get('/add', judgmentController.showJudgmentForm);
router.get('/edit/:judgmentID', judgmentController.showJudgmentEdit);
router.get('/desc/:judgmentID', judgmentController.showJudgmentDescription);
router.get('/delete/:judgmentID', judgmentController.deleteJudgment);

router.post('/edit/:judgmentID', judgmentController.updateJudgment);
router.post('/add', judgmentController.addJudgment);
module.exports = router;