const express = require("express");
const {
  createTodo,
  getTodoByUserId,
} = require("../controllers/todo.controller");
const { authMiddleware } = require("../middleware/auth");
const route = express.Router();

route.post("/", createTodo);
route.get("/:user_id", authMiddleware, getTodoByUserId);

module.exports = {
  todoRoute: route,
};
