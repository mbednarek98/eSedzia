const sequelize = require('./sequelize');

const Charge = require('../../model/sequelize/Charge');
const Gperson = require('../../model/sequelize/Gperson');
//const Judge = require('../../model/sequelize/Judge');
const Judgment = require('../../model/sequelize/Judgment');
//const Person = require('../../model/sequelize/Person');

module.exports = () => {
    /*Person.hasOne(Gperson, { as: 'gperson', foreignKey: { name: 'PersonID', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Gperson.belongsTo(Person, { as: 'personG', foreignKey: { name: 'PersonID', allowNull: false } });

    Person.hasOne(Judge, { as: 'judge', foreignKey: { name: 'PersonID', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Judge.belongsTo(Person, { as: 'personJ', foreignKey: { name: 'PersonID', allowNull: false } });*/

    Charge.hasMany(Judgment, { as: 'judgments', foreignKey: { name: 'ChargeID', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Judgment.belongsTo(Charge, { as: 'charge', foreignKey: { name: 'ChargeID', allowNull: false } });

    Gperson.hasMany(Judgment, { as: 'judgments', foreignKey: { name: 'GpersonID', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Judgment.belongsTo(Gperson, { as: 'gperson', foreignKey: { name: 'GpersonID', allowNull: false } });

    /*Judge.hasMany(Judgment, { as: 'judgments', foreignKey: { name: 'JudgeID', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Judgment.belongsTo(Judge, { as: 'judge', foreignKey: { name: 'JudgeID', allowNull: false } });*/


    //let allPersons, allGpersons, allJudges, allCharges;
    let allGpersons, allCharges;
    return sequelize
        .sync({ force: true })
        .then(() => {
            return Gperson.findAll();
        })
        .then(gper => {
            if (!gper || gper.length == 0) {
                return Gperson.bulkCreate([
                    { Name: 'Jan', Surname: 'Kowalski', PhoneNumber: Math.floor(Math.random() * (899999999)) + 100000000, PESEL: '' + Math.floor(Math.random() * (89999999999) + 10000000000), DateofBirth: '1998-05-11', Residence: 'ul. Jaculki 13' },
                    { Name: 'Jacek', Surname: 'Sieczko', PhoneNumber: Math.floor(Math.random() * (899999999)) + 100000000, PESEL: '' + Math.floor(Math.random() * (89999999999) + 10000000000), DateofBirth: '2000-10-11', Residence: 'ul. Kazimierza 25' },
                    { Name: 'Szymon', Surname: 'Smieszek', PhoneNumber: Math.floor(Math.random() * (899999999)) + 100000000, PESEL: '' + Math.floor(Math.random() * (89999999999) + 10000000000), DateofBirth: '1998-06-11', Residence: 'ul. Kwiatkowska 63' },
                    { Name: 'Milosz', Surname: 'Szewczyk', PhoneNumber: Math.floor(Math.random() * (899999999)) + 100000000, PESEL: '' + Math.floor(Math.random() * (89999999999) + 10000000000), DateofBirth: '1997-07-11', Residence: 'ul. Szczytna 12' },
                    { Name: 'Mateusz', Surname: 'Skala', PhoneNumber: Math.floor(Math.random() * (899999999)) + 100000000, PESEL: '' + Math.floor(Math.random() * (89999999999) + 10000000000), DateofBirth: '1996-07-11', Residence: 'ul. Zaruby 52' },
                    { Name: 'Tadeusz', Surname: 'Zulul', PhoneNumber: Math.floor(Math.random() * (899999999)) + 100000000, PESEL: '' + Math.floor(Math.random() * (89999999999) + 10000000000), DateofBirth: '1995-07-11', Residence: 'ul. Smieszko 22' },
                    { Name: 'Kazimierz', Surname: 'Mleko', PhoneNumber: Math.floor(Math.random() * (899999999)) + 100000000, PESEL: '' + Math.floor(Math.random() * (89999999999) + 10000000000), DateofBirth: '1994-07-11', Residence: 'ul. Paderewskiego 62' },
                    { Name: 'Janusz', Surname: 'Rzepa', PhoneNumber: Math.floor(Math.random() * (899999999)) + 100000000, PESEL: '' + Math.floor(Math.random() * (99999999999) + 10000000000), DateofBirth: '1993-07-11', Residence: 'ul. Szymona 12' }
                ])
                    .then(() => {
                        return Gperson.findAll();
                    });
            } else {
                return gper;
            }
        })
        .then(gper => {
            allGpersons = gper;
            return Charge.findAll();
        })
        .then(cha => {
            if (!cha || cha.length == 0) {
                return Charge.bulkCreate([
                    { Name: 'Niealimentacja', Type: 'Art. 209', Description: 'Uchylanie się od obowiązku alimentacyjnego' },
                    { Name: 'Znęcanie się', Type: 'Art. 207', Description: 'Kto znęca się fizycznie lub psychicznie nad osobą najbliższą lub nad inną osobą pozostającą w stałym lub przemijającym stosunku zależności od sprawcy podlega karze pozbawienia wolności od 3 miesięcy do lat 5.' }
                ])
                    .then(() => {
                        return Charge.findAll();
                    });
            } else {
                return cha;
            }
        })
        .then(cha => {
            allCharges = cha;
            return Judgment.findAll();
        })
        .then(judgm => {
            if (!judgm || judgm.length == 0) {
                return Judgment.bulkCreate([
                    { Date: '2001-01-01', Description: 'tekst dotyczacy sprawy wersja 1', Verdict: "Winny", Penalty: Math.round(Math.random() * 1000 - 100), ChargeID: allCharges[0].ChargeID, GpersonID: allGpersons[0].GpersonID },
                    { Date: '2005-05-05', Description: 'tekst dotyczacy sprawy wersja 2', Verdict: "Niewinny", Penalty: Math.round(Math.random() * 1000 - 100), ChargeID: allCharges[1].ChargeID, GpersonID: allGpersons[1].GpersonID },
                    { Date: '2002-01-01', Description: 'tekst dotyczacy sprawy wersja 3', Verdict: "Winny", Penalty: Math.round(Math.random() * 1000 - 100), ChargeID: allCharges[0].ChargeID, GpersonID: allGpersons[2].GpersonID },
                    { Date: '2007-05-05', Description: 'tekst dotyczacy sprawy wersja 4', Verdict: "Winny", Penalty: Math.round(Math.random() * 1000 - 100), ChargeID: allCharges[1].ChargeID, GpersonID: allGpersons[3].GpersonID },
                    { Date: '2003-01-01', Description: 'tekst dotyczacy sprawy wersja 5', Verdict: "Winny", Penalty: Math.round(Math.random() * 1000 - 100), ChargeID: allCharges[0].ChargeID, GpersonID: allGpersons[4].GpersonID },
                    { Date: '2008-05-05', Description: 'tekst dotyczacy sprawy wersja 6', Verdict: "Niewinny", Penalty: Math.round(Math.random() * 1000 - 100), ChargeID: allCharges[1].ChargeID, GpersonID: allGpersons[5].GpersonID }
                ]);
            } else {
                return judgm;
            }
        });
};