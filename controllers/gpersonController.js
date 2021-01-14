const GpersonRepository = require('../repository/sequelize/GpersonRepository');
//GET
exports.showGpersonList = (req, res, next) => {
    GpersonRepository.getGpersons()
        .then(gpers => {
            res.render('gperson/gperson-list', {
                gpers: gpers,
                navLocation: 'gperson'
            });
        });
}
exports.showGpersonForm = (req, res, next) => {
    res.render('gperson/gperson-form', { formAction: ' ', validationErrors: [], data: {} });
}


exports.showGpersonDesc = (req, res, next) => {
    const GpersonID = req.params.GpersonID;
    GpersonRepository.getGpersonsById(GpersonID)
        .then(gper => {
            res.render('gperson/gperson-desc', {
                gper: gper,
                navLocation: 'gperson'
            });
        });
}


exports.showGpersonEdit = (req, res, next) => {
    const GpersonID = req.params.GpersonID;
    GpersonRepository.getGpersonsById(GpersonID)
        .then(gper => {
            res.render('gperson/gperson-edit', {
                gper: gper,
                navLocation: 'gperson',
                formAction: ' ',
                validationErrors: []
            });
        });
}



//POST
exports.updateGperson = (req, res, next) => {
    const GpersonID = req.params.GpersonID;
    const Data = { ...req.body };
    let gp;
    GpersonRepository.getGpersonsById(GpersonID).then(gper => {
        gp = gper;
        return GpersonRepository.updateGperson(GpersonID, Data)
    }).then(result => {
        res.redirect('/gperson');
    }).catch(err => {
        console.log(err.details);
        res.render('gperson/gperson-edit', {
            data: Data,
            gper: gp,
            formAction: ' ',
            navLocation: 'gperson',
            validationErrors: err.errors
        })
    })
}


exports.deleteGperson = (req, res, next) => {
    const GpersonID = req.params.GpersonID;
    GpersonRepository.deleteGperson(GpersonID)
        .then(result => {
            res.redirect('/gperson');
        })
}


exports.addGperson = (req, res, next) => {
    const Data = { ...req.body };
    GpersonRepository.createGperson(Data)
        .then(result => {
            res.redirect('/gperson');
        }).catch(err => {
            console.log(err);
            res.render('gperson/gperson-form', {
                data: Data,
                formAction: ' ',
                navLocation: 'gperson',
                validationErrors: err.errors
            })
        })
}
