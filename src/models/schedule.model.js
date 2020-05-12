const Sequelize = require("sequelize");
const connection = require('../../dbConn');

const Schedule = connection.define('schedule', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    Date: {
        type: Sequelize.DATE
    },
    Time: {
        type: Sequelize.TIME
    },
    outlet: {
        type: Sequelize.STRING
    },
}, {
    freezeTableName: true,
    tableName: 'schedule',
    paranoid: true
});

module.exports = Schedule;