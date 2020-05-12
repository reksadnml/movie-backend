const express = require('express');
const router = express.Router();
const ScheduleService = require('../services/schedule.service');
const {addNewSchedule, getScheduleList, deleteSchedule, updateSchedule} = require("../controllers/schedule.controller");
const tokenValidation = require('../middlewares/token-validation');
const scheduleService = new ScheduleService();

router.use(tokenValidation);
router.get('/', (req, res, next) => getScheduleList(req, res, scheduleService));
router.post('/', (req, res, next) => addNewSchedule(req, res, scheduleService));
router.delete('/:id', (req, res, next) => deleteSchedule(req, res, scheduleService));
router.put('/', (req, res, next) => updateSchedule(req, res, scheduleService));


module.exports = router;