const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Person = sequelize.define('Person', {
    PersonID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
        }
    },
    Surname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
        }
    },
    PhoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isNumeric: {
                msg: "Pole powinno być cyfra lub liczba"
            },
            len: {
                args: [9, 9],
                msg: "Pole powinno zawierać 9 cyfr"
            }
        }
    },
});

module.exports = Person;