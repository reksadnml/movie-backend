const userAuthentication = async (req, res, service) => {
    try {
        const user = req.body;
        const userInfo = await service.authenticate(user);
        if (userInfo) {
            res.send(userInfo);
        }
        else {
            res.status(401);
        }
    }
    catch (e) {
        res.status(500);
    }
};

module.exports = {
    userAuthentication
}