const Sequelize = require("sequelize");
const connection = require('../../dbConn');

const Movie = connection.define('movie', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    movieName: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    review: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'movie',
    paranoid: true,
});

module.exports = Movie;