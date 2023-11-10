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

const getTodoById = async (req, res) => {
  const todoId = req.params.todo_id;

  try {
    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(400).json({
        message: "todo tidak ditemukan",
        data: null,
      });
    }

    res.status(200).json({
      message: "berhasil mendapatkan todo",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      message: "gagal mendapatkan todo",
      error: error.message,
    });
  }
};

const editTodo = async (req, res) => {
  const todoId = req.params.todo_id;
  const data = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(todoId, data, {
      new: true,
    });

    if (!todo) {
      res.status(400).json({
        message: "todo tidak ditemukan",
        data: null,
      });
    }

    res.json({
      message: "berhasil mengubah todo",
      data: todo,
    });
  } catch (error) {
    res.json({
      message: "gagal mengubah todo",
      error: error.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  const todoId = req.params.todo_id;

  console.log(todoId);
  try {
    const todo = await Todo.findByIdAndDelete(todoId);

    if (!todo) {
      return res.status(400).json({
        message: "todo tidak ditemukan",
        data: null,
      });
    }

    res.status(200).json({
      message: "berhasil menghapus todo",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      message: "gagal menghapus todo",
      error: error.message,
    });
  }
};

const deleteAllTodo = async (req, res) => {
  const userId = req.user.id;

  console.log('adfsn')
  // console.log(userId)
  try {
    const todo = await Todo.deleteMany({
      userID: userId,
    });

    res.json({
      message: "berhasil menghapus semua todo",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      message: "gagal menghapus todo",
      error: error.message,
    });
  }
};

module.exports = {
  createTodo,
  getTodoByUserId,
  getTodoById,
  editTodo,
  deleteTodo,
  deleteAllTodo,
};
