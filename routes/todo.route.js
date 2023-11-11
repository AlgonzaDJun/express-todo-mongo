const express = require("express");
const {
  createTodo,
  getTodoByUserId,
  getTodoById,
  editTodo,
  deleteTodo,
  deleteAllTodo,
} = require("../controllers/todo.controller");
const { authMiddleware } = require("../middleware/auth");
const route = express.Router();

route.post("/", authMiddleware, createTodo);
route.get("/", authMiddleware, getTodoByUserId);

// belum
route.get("/:todo_id", authMiddleware, getTodoById);
route.put("/:todo_id", authMiddleware, editTodo);
route.delete("/:todo_id", authMiddleware, deleteTodo);
route.post("/delete_all", authMiddleware, deleteAllTodo);

module.exports = {
  todoRoute: route,
};
