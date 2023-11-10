const express = require("express");
const { getAllUser, createUser } = require("../controllers/user.controller");
const route = express.Router();

route.get("/", getAllUser);
route.post("/", createUser);

module.exports = {
    userRoute: route,
};