const connection = require('./dbConn');
const Movie = require('./src/models/movie.model');
const Category = require('./src/models/category.model');
const Schedule = require('./src/models/schedule.model');
const dbAssociation = require('./src/models/index');
// require('./src/models/orderItem.model');
const SysUser = require('./src/models/user.model');

const bcrypt = require('bcryptjs');

async function migration() {
    dbAssociation();
    await connection.sync({force: true});
    let category01 = await Category.create({categoryName: 'Action'});
    let category02 = await Category.create({categoryName: 'Horror'});
    let category03 = await Category.create({categoryName: 'Romance'});

    let mov01 = await Movie.create(
        {movieName: 'Danur', description: 'Film horror Indo', review: 'bagus'});
    mov01.setCategory(category02);

    let mov02 = await Movie.create(
        {movieName: 'Habibie Ainun', description:'Kisah cinta habibie dan ainun', review:'sangat bagus'});
    mov02.setCategory(category03);

    let mov03 = await Movie.create(
        {movieName: 'Mission Impossible : Fallout', description:'action luar negri', review:'sangat bagus'});
    mov03.setCategory(category01);

    var passwordHash = bcrypt.hashSync('P@ssw0rd', 8);
    await SysUser.create(
        {userName: 'eca', userPassword: passwordHash, fullName: 'Eca', email: 'eca@example.com'}
    )

    let schedule01 = await Schedule.create(
        {Date: '2020-05-02', Time: '10.00', outlet: 'CGV cinema'});
    schedule01.setMovie(mov01);
    
    let schedule02 = await Schedule.create({Date: '2020-05-03', Time: '10.00', outlet: 'CGV cinema'});
    schedule02.setMovie(mov02);
    let schedule03 = await Schedule.create({Date: '2020-05-04', Time: '10.00', outlet: 'CGV cinema'});
    schedule03.setMovie(mov03);

    var passwordHash = bcrypt.hashSync('P@ssw0rd', 8);
    await SysUser.create(
        {userName: 'eca', userPassword: passwordHash, fullName: 'Eca', email: 'eca@example.com'}
    )
}

migration();