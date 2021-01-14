const ChargeRepository = require('../repository/sequelize/ChargeRepository');
exports.showChargeList = (req, res, next) => {
    ChargeRepository.getCharge()
        .then(chargs => {
            res.render('charge/charge-list', {
                chargs: chargs,
                navLocation: 'charge'
            });
        });
}

exports.showChargeForm = (req, res, next) => {
    res.render('charge/charge-form', { formAction: ' ', validationErrors: [], data: {} });
}

exports.showChargeEdit = (req, res, next) => {
    const ChargeID = req.params.chargeID;
    ChargeRepository.getChargeById(ChargeID)
        .then(charg => {
            res.render('charge/charge-edit', {
                charg: charg,
                navLocation: 'charge',
                formAction: ' ',
                validationErrors: []
            });
        });
}


exports.showDescription = (req, res, next) => {
    const ChargeID = req.params.chargeID;
    console.log(ChargeID)
    ChargeRepository.getChargeById(ChargeID)
        .then(charg => {
            res.render('charge/charge-desc', {
                charg: charg,
                navLocation: 'charge'

            });
        });
}



//POST
exports.updateCharge = (req, res, next) => {
    const ChargeID = req.params.chargeID;
    const Data = { ...req.body };
    let charg;
    ChargeRepository.getChargeById(ChargeID)
        .then(char => {
            charg = char;
            return ChargeRepository.updateCharge(ChargeID, Data);
        })
        .then(result => {
            res.redirect('/charge');
        }).catch(err => {
            console.log(err.details);
            res.render('charge/charge-edit', {
                charg: charg,
                data: Data,
                formAction: ' ',
                navLocation: 'charge',
                validationErrors: err.errors
            })
        })
}


exports.deleteCharge = (req, res, next) => {
    const ChargeID = req.params.chargeID;
    ChargeRepository.deleteCharge(ChargeID)
        .then(result => {
            res.redirect('/charge');
        })
}


exports.addCharge = (req, res, next) => {
    const Data = { ...req.body };
    ChargeRepository.createCharge(Data)
        .then(result => {
            res.redirect('/charge');
        }).catch(err => {
            console.log(err.details);
            res.render('charge/charge-form', {
                data: Data,
                formAction: '/charge/add',
                navLocation: 'charge',
                validationErrors: err.errors
            })
        })
}
