const Judgment = require("../../model/sequelize/Judgment");
//const Judge = require("../../model/sequelize/Judge");
const Charge = require("../../model/sequelize/Charge");
//const Person = require("../../model/sequelize/Person");
const Gperson = require("../../model/sequelize/Gperson");


//GET ALL JUDGMENTS ALL
exports.getJudgments = () => {
    return Judgment.findAll
        ({
            include: [{
                model: Charge,
                as: 'charge'
            }, {
                model: Gperson,
                as: 'gperson'
            }]
        })
};
//GET JUDGMENT BY ID
exports.getJudgmentsById = (JudgmentID) => {
    return Judgment.findByPk
        (JudgmentID, {
            include: [{
                model: Charge,
                as: 'charge'
            }, {
                model: Gperson,
                as: 'gperson',
            }]
        }
        )
};


//POST JUDGMENT CREATE
exports.createJudgment = (data) => {
    return Judgment.create({
        Date: data.Date,
        Description: data.Description,
        Verdict: data.Verdict,
        Penalty: data.Penalty,
        ChargeID: data.ChargeID,
        GpersonID: data.GpersonID,
    })
};

//POST JUDGMENT UPDATE
exports.updateJudgment = (id, data) => {
    return Judgment.update({
        Date: data.Date,
        Description: data.Description,
        Verdict: data.Verdict,
        Penalty: data.Penalty,
        ChargeID: data.ChargeID,
        GpersonID: data.GpersonID,
    }, { where: { JudgmentID: id } });
};

//POST JUDGMENT DELETE
exports.deleteJudgment = (id) => {
    return Judgment.destroy(
        {
            where: { JudgmentID: id }
        });
}