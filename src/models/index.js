const Category = require('./category.model');
const Movie = require('./movie.model');
const Schedule = require('./schedule.model');

const dbAssociation = function dbAssociation() {
    Category.hasMany(Movie);
    Movie.belongsTo(Category);

    Movie.hasMany(Schedule);
    Schedule.belongsTo(Movie);

    Schedule.belongsToMany(Movie, {through: 'orderItem'});
    Movie.belongsToMany(Schedule, {through: 'orderItem'});

};

module.exports = dbAssociation;
