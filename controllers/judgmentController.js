const JudgmentRepository = require('../repository/sequelize/JudgmentRepository');
const GpersonRepository = require('../repository/sequelize/GpersonRepository');
//const JudgeRepository = require('../repository/sequelize/JudgeRepository');
const ChargeRepository = require('../repository/sequelize/ChargeRepository');
const Judgment = require('../model/sequelize/Judgment');
exports.showJudgmentList = (req, res, next) => {
    JudgmentRepository.getJudgments()
        .then(judgms => {
            res.render('judgment/judgment-list', {
                judgms: judgms,
                navLocation: 'judgment'
            });
        });
}

exports.showJudgmentForm = (req, res, next) => {
    let allGpersons, allCharges;
    GpersonRepository.getGpersons()
        .then(gpers => {
            allGpersons = gpers;
            return ChargeRepository.getCharge();
        }).then(charg => {
            allCharges = charg;
            res.render('judgment/judgment-form', {
                judgment: {},
                data: {},
                allGpersons: allGpersons,
                allCharges: allCharges,
                formAction: ' ',
                navLocation: 'judgment',
                validationErrors: []
            });
        });
}


exports.showJudgmentEdit = (req, res, next) => {
    const JudgmnetID = req.params.judgmentID;
    let allGpersons, allCharges;
    GpersonRepository.getGpersons()
        .then(gpers => {
            allGpersons = gpers;
            return ChargeRepository.getCharge();
        }).then(chargs => {
            allCharges = chargs;
            return JudgmentRepository.getJudgmentsById(JudgmnetID);
        })
        .then(judgms => {
            res.render('judgment/judgment-edit', {
                data: {},
                judgms: judgms,
                allGpersons: allGpersons,
                allCharges: allCharges,
                formAction: ' ',
                navLocation: 'judgment',
                validationErrors: [],
            });
        });
}

exports.updateJudgment = (req, res, next) => {
    const JudgmnetID = req.params.judgmentID;
    const Data = { ...req.body };
    let allGpersons, allCharges, judgms;
    GpersonRepository.getGpersons()
        .then(gpers => {
            allGpersons = gpers;
            return JudgmentRepository.getJudgmentsById(JudgmnetID);
        }).then(judg => {
            judgms = judg;
            return ChargeRepository.getCharge();
        }).then(chargs => {
            allCharges = chargs;
            return JudgmentRepository.updateJudgment(JudgmnetID, Data);
        })
        .then(result => {
            res.redirect('/judgment');
        }).catch(err => {
            console.log(err);
            res.render('judgment/judgment-edit', {
                data: Data,
                judgms: judgms,
                allGpersons: allGpersons,
                allCharges: allCharges,
                formAction: ' ',
                navLocation: 'judgment',
                validationErrors: err.errors
            })
        })
}

exports.showJudgmentDescription = (req, res, next) => {
    const JudgmnetID = req.params.judgmentID;
    JudgmentRepository.getJudgmentsById(JudgmnetID)
        .then(judgm => {
            res.render('judgment/judgment-desc', {
                judgm: judgm,
                navLocation: 'judgment'
            });
        });
}

exports.deleteJudgment = (req, res, next) => {
    const JudgmnetID = req.params.judgmentID;
    JudgmentRepository.deleteJudgment(JudgmnetID)
        .then(result => {
            res.redirect('/judgment');
        })
}

exports.addJudgment = (req, res, next) => {
    const Data = { ...req.body };
    let allGpersons, allCharges;
    GpersonRepository.getGpersons()
        .then(gpers => {
            allGpersons = gpers;
            return ChargeRepository.getCharge();
        }).then(chargs => {
            allCharges = chargs;
            return JudgmentRepository.createJudgment(Data);
        }).then(result => {
            res.redirect('/judgment');
        }).catch(err => {
            console.log(err);
            res.render('judgment/judgment-form', {
                data: Data,
                allGpersons: allGpersons,
                allCharges: allCharges,
                formAction: ' ',
                navLocation: 'judgment',
                validationErrors: err.errors
            })
        })
}
