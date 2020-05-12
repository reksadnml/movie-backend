const express = require('express');
const router = express.Router();
const UserService = require('../services/auth.service');

const {userAuthentication} = require("../controllers/user.controller")

const userService = new UserService();

router.post('/', (req, res, next) =>userAuthentication(req, res, userService));

module.exports = router;