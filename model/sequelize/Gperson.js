const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const GuiltyPerson = sequelize.define('GuiltyPerson', {
    GpersonID: {
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

    PESEL: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isNumeric: {
                msg: "Pole powinno być cyfra lub liczba"
            },
            len: {
                args: [11, 11],
                msg: "Pole powinno zawierać 11 cyfr"
            },

        }
    },

    DateofBirth: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDate: {
                msg: "Pole powinno zawierać datę w formacie yyyy-mm-dd"
            },
            isBeforeToday(value) {
                var today = new Date();
                var day = today.getDate();
                var month = today.getMonth() + 1;
                var year = today.getFullYear();
                if (day < 10) day = "0" + day;
                if (month < 10) month = "0" + month;
                var today = year + "-" + month + "-" + day;
                if (value && value.toISOString().split('T')[0] > today) throw new Error("Nie można wybrać daty późniejszej niż dzisiaj")
            }
        }
    },

    Residence: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [3, 100],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
        }
    }
});

module.exports = GuiltyPerson;