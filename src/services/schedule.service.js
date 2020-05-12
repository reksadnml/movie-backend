const logEvent = require('../events/myEmitter');
const Schedule = require('../models/schedule.model');
const Category = require('../models/category.model');
const movie = require('../models/movie.model')

class ScheduleService {
    constructor(schedule) {
        this.schedule = schedule;
    }
    async getAllSchedule() {
        let result;
        try {
            // result = await Product.findAll();
            result = await Schedule.findAll({include: movie});
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-Schedule-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async getScheduleById(id) {
        let result;
        try {
            result = await Schedule.findByPk(id, {include: movie});
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MOVIE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error (e);
        }
        return result;
    }

    async createSchedule(schedule) {
        let result;
        try {
            result = await Schedule.create(schedule);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-PRODUCT-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async updateSchedule(newSchedule) {
        const schedule = await Schedule.findByPk(newSchedule.id);
        schedule.Date = newSchedule.Date;
        schedule.outlet = newSchedule.outlet;
        let result;
        try {
            result = await schedule.save();
        }
        catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-MOVIE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async deleteSchedule(scheduleId) {
        const schedule = await Schedule.findByPk(scheduleId);
        let result;
        try {
            result = await schedule.destroy();
        }
        catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-MOVIE-FAILED',
                logMessage: e
            });
        }
        return result
    }
}

module.exports = ScheduleService;