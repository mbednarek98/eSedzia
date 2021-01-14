const Judgment = require("../../model/sequelize/Judgment");
//const Judge = require("../../model/sequelize/Judge");
const Charge = require("../../model/sequelize/Charge");
//const Person = require("../../model/sequelize/Person");
const Gperson = require("../../model/sequelize/Gperson");


//GET GPERSON ALL
exports.getGpersons = () => {
    return Gperson.findAll()
};
//GET GPERSON BY ID
exports.getGpersonsById = (PersonID) => {
    return Gperson.findByPk
        (PersonID, {
            include: [{
                model: Judgment,
                as: 'judgments',
                include: [{
                    model: Charge,
                    as: 'charge'
                }]
            }]
        });
};

//POST GPERSON CREATE
exports.createGperson = (data) => {
    return Gperson.create({
        Name: data.Name,
        Surname: data.Surname,
        PhoneNumber: data.PhoneNumber,
        PESEL: data.PESEL,
        DateofBirth: data.DateofBirth,
        Residence: data.Residence
    });
};

//POST GPERSON UPDATE
exports.updateGperson = (ID, Data) => {
    return Gperson.update({
        PersonID: ID,
        Name: Data.Name,
        Surname: Data.Surname,
        PhoneNumber: Data.PhoneNumber,
        PESEL: Data.PESEL,
        DateofBirth: Data.DateofBirth,
        Residence: Data.Residence
    }, { where: { GpersonID: ID } })
};

//POST GPERSON DELETE
exports.deleteGperson = (ID) => {
    return Gperson.destroy(
        {
            where: { GpersonID: ID }
        });
}