const getScheduleList = async (req, res, service) => {
    try {
        let schedules;
        if (req.query.id) {
            const id = req.query.id;
            schedules = await service.getScheduleById(id)
        } else if (req.query.pageNo && req.query.rowPage) {
            schedules = await service.getAllSchedulePaging(req.query.pageNo, req.query.rowPage);
        } else {
            schedules = await service.getAllSchedule();
            console.log('lllll')
        }
        res.status(200);
        res.json(schedules);
    } catch (e) {
        res.status(500);
        res.json({});
    }

};

const addNewSchedule = async (req, res, service) => {
    try {
        const schedule = req.body;
        const newSchedule = await service.createSchedule(schedule);
        res.status(200);
        res.json(newSchedule);
    } catch (e) {
        res.status(500);
        res.json({});
    }
};

const updateSchedule = async (req, res, service) => {
    const schedule = req.body;
    const updatedSchedule = await service.updateSchedule(schedule);
    res.send(updatedSchedule);
};

const deleteSchedule = async (req, res, service) => {
    const scheduleId = req.params.id;
    const scheduleMovie = await service.deleteSchedule(scheduleId);
    res.send({id: scheduleId});
};

module.exports = {
    getScheduleList, addNewSchedule, updateSchedule, deleteSchedule
};