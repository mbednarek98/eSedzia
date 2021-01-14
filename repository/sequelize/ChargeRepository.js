const Judgment = require("../../model/sequelize/Judgment");
//const Judge = require("../../model/sequelize/Judge");
const Charge = require("../../model/sequelize/Charge");
//const Person = require("../../model/sequelize/Person");
const Gperson = require("../../model/sequelize/Gperson");


//GET CHARGE ALL
exports.getCharge = () => {
    return Charge.findAll();
};

//GET CHARGE BY ID
exports.getChargeById = (ChargeID) => {
    return Charge.findByPk
        (ChargeID,
            {
                include:
                    [
                        {
                            model: Judgment,
                            as: 'judgments',
                            include:
                                [
                                    {
                                        model: Gperson,
                                        as: 'gperson',
                                    }
                                ]
                        }]
            });
};


//POST CHARGE CREATE
exports.createCharge = (data) => {
    console.log(data);
    return Charge.create({
        Name: data.Name,
        Type: data.Type,
        Description: data.Description
    })
};

//POST CHARGE UPDATE
exports.updateCharge = (id, data) => {
    return Charge.update({
        Name: data.Name,
        Type: data.Type,
        Description: data.Description
    }, { where: { ChargeID: id } });
};

//POST CHARGE DELETE
exports.deleteCharge = (id) => {
    return Charge.destroy(
        {
            where: { ChargeID: id }
        });

}