const express = require('express')
const user_route = express.Router();
const userControl = require("../controller/userControl");


user_route.post("/addUser",userControl.addUser);

module.exports = user_route


