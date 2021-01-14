const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Judge = sequelize.define('Judge', {
    PersonID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    Retired: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [3, 3],
                msg: "Pole powinno zawierać 3 znaki"
            }
        }
    },
    DateofObtainingQualification: {
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
});

module.exports = Judge;