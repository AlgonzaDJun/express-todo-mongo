const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
  let data = req.body;

  const todo = await Todo.create(data);

  res.json({
    message: "berhasil membuat todo",
    data: todo,
  });
};

const getTodoByUserId = async (req, res) => {
  const { user_id } = req.params;

  const todos = await Todo.find({ userID: user_id });

  res.json({
    message: "berhasil mendapatkan todo",
    data: todos,
  });
};

module.exports = {
  createTodo,
  getTodoByUserId,
};
