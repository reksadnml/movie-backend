const express = require('express');
const router = express.Router();

const movieRoutes = require('./movie.route');
const categoryRoutes = require('./category.route');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const scheduleRoutes = require('./schedule.route');
const noRoute = require('./no.route');
const logRoute = require('./log.route');

router.use(logRoute);
router.use('/auth', authRoutes);
router.use('/movie', movieRoutes);
router.use('/category', categoryRoutes);
router.use('/user', userRoutes);
router.use('/schedule', scheduleRoutes);
router.use(noRoute);

module.exports = router;