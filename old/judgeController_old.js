const JudgeRepository = require('../repository/sequelize/JudgeRepository');
exports.showJudgeList = (req, res, next) => {
    JudgeRepository.getJudges()
        .then(judgs => {
            res.render('judge/judge-list', {
                judgs: judgs,
                navLocation: 'judge'
            });
        });
}
exports.showJudgeForm = (req, res, next) => {
    res.render('judge/judge-form', { formAction: ' ', validationErrors: [] });
}


exports.showJudgeEdit = (req, res, next) => {
    const PersonID = req.params.personID;
    JudgeRepository.getOnlyJudgesById(PersonID)
        .then(judg => {
            res.render('judge/judge-edit', {
                judg: judg,
                navLocation: 'judge',
                formAction: ' ',
                validationErrors: []
            });
        });
}

exports.showJudgeDesc = (req, res, next) => {
    const PersonID = req.params.personID;
    JudgeRepository.getJudgesById(PersonID)
        .then(judg => {
            res.render('judge/judge-desc', {
                judg: judg,
                navLocation: 'judge'
            });
        });
}


//POST
exports.updateJudge = (req, res, next) => {
    const PersonID = req.params.personID;
    const Data = { ...req.body };
    JudgeRepository.updateJudge(PersonID, Data)
        .then(result => {
            res.redirect('/judge');
        }).catch(err => {
            console.log(err);
            res.render('judge/judge-edit', {
                data: Data,
                formAction: '/judge/edit',
                navLocation: 'judge',
                validationErrors: err.errors
            })
        })
}


exports.deleteJudge = (req, res, next) => {
    const PersonID = req.params.personID;
    JudgeRepository.deleteJudge(PersonID)
        .then(result => {
            res.redirect('/judge');
        })
}


exports.addJudge = (req, res, next) => {
    const Data = { ...req.body };
    JudgeRepository.createJudge(Data)
        .then(result => {
            res.redirect('/judge');
        }).catch(err => {
            console.log(err.details);
            res.render('judge/judge-form', {
                data: Data,
                formAction: '/judge/add',
                navLocation: 'judge',
                validationErrors: err.errors
            })
        })
}