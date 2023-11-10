const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
  let data = req.body;

  user_id = req.user.id;

  if (!data.value) {
    return res.status(400).json({ message: "data tidak boleh kosong" });
  }

  try {
    const todo = await Todo.create({
      value: data.value,
      status: false,
      userID: user_id,
    });

    res.json({
      message: "berhasil membuat todo",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      message: "gagal membuat todo",
      error: error.message,
    });
  }
};

const getTodoByUserId = async (req, res) => {
  // const { user_id } = req.params;

  const userId = req.user.id;

  try {
    const todos = await Todo.find({ userID: userId });

    res.json({
      message: "berhasil mendapatkan todo",
      data: todos,
    });
  } catch (error) {
    res.status(400).json({
      message: "gagal mendapatkan todo",
      error: error.message,
    });
  }
};

module.exports = {
  createTodo,
  getTodoByUserId,
};
