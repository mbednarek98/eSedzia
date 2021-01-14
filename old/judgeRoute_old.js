const express = require('express');
const router = express.Router();
const judgeController = require('../controllers/judgeController');
router.get('/', judgeController.showJudgeList);
router.get('/add', judgeController.showJudgeForm);
router.get('/edit/:personID', judgeController.showJudgeEdit);
router.get('/desc/:personID', judgeController.showJudgeDesc);
router.get('/delete/:personID', judgeController.deleteJudge);

router.post('/edit/:personID', judgeController.updateJudge);
router.post('/add', judgeController.addJudge);
module.exports = router;