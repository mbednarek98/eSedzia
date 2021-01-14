const Judgment = require("../../model/sequelize/Judgment");
const Judge = require("../../model/sequelize/Judge");
const Charge = require("../../model/sequelize/Charge");
const Person = require("../../model/sequelize/Person");
const Gperson = require("../../model/sequelize/Gperson");


//GET JUDGE ALL
exports.getJudges = () => {
    return Judge.findAll
        (
            {
                include:
                    [
                        {
                            model: Person,
                            as: 'personJ'
                        }
                    ]
            }
        )
};
//GET JUDGE BY ID
exports.getJudgesById = (PersonID) => {
    return Judge.findByPk
        (PersonID,
            {
                include:
                    [
                        {
                            model: Person,
                            as: 'personJ'
                        },
                        {
                            model: Judgment,
                            as: 'judgments',
                            include:
                                [
                                    {
                                        model: Charge,
                                        as: 'charge'
                                    },
                                    {
                                        model: Gperson,
                                        as: 'gperson',
                                        include:
                                            [
                                                {
                                                    model: Person,
                                                    as: 'personG'
                                                }
                                            ]
                                    }
                                ]
                        }]
            });
};
//GET JUDGE BY ID ONLY WITH PERSON
exports.getOnlyJudgesById = (PersonID) => {
    return Judge.findByPk
        (PersonID,
            {
                include:
                    [
                        {
                            model: Person,
                            as: 'personJ'
                        }
                    ]
            });
};

//POST JUDGE CREATE
exports.createJudge = (data) => {
    console.log(data.Retired);
    return Judge.create({
        personJ: {
            Name: data.Name,
            Surname: data.Surname,
            PhoneNumber: data.PhoneNumber
        },
        Retired: data.Retired,
        DateofObtainingQualification: data.DateofObtainingQualification
    }, {
        include: [
            { model: Person, as: 'personJ' }
        ]
    }
    ).then((result) => {
        // both instances should be created now
    });

};

//POST JUDGE UPDATE
exports.updateJudge = (PerID, PerData) => {
    Person.update({
        PersonID: PerID,
        Name: PerData.Name,
        Surname: PerData.Surname,
        PhoneNumber: PerData.PhoneNumber
    }, { where: { PersonID: PerID } });

    return Judge.update({
        PersonID: PerID,
        Retired: PerData.Retired,
        DateofObtainingQualification: PerData.DateofObtainingQualification
    }, { where: { PersonID: PerID } })
};

//POST JUDGE DELETE
exports.deleteJudge = (perID) => {
    Person.destroy(
        {
            where: { PersonID: perID }
        });
    return Judge.destroy(
        {
            where: { PersonID: perID }
        });

}