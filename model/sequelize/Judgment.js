const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Judgment = sequelize.define('Judgment', {
    JudgmentID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDate: {
                msg: "Pole powinno zawierać datę w formacie yyyy-mm-dd"
            },
        }
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [10, 500],
                msg: "Pole powinno zawierać od 10 do 500 znaków"
            }
        }
    },
    Verdict: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            }

        }
    },
    Penalty: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isNumeric: {
                msg: "Pole powinno być cyfra lub liczba"
            },
            min: {
                args: [0.00],
                msg: "Wartość pola nie może byc poniżej zera"
            },
            max: {
                args: [10000000.00],
                msg: "Wartość pola nie może byc powyzej 10 milionów"
            },
        }
    },
    ChargeID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        }
    },
    GpersonID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        }
    }
});

module.exports = Judgment;