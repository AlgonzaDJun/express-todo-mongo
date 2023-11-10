const User = require("../models/User");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find();

    res.json({
      message: "berhasil mendapatkan data user",
      data: users,
    });
  },

  createUser: async (req, res) => {
    let data = req.body;

    const user = await User.create(data)

    res.json({
      message: "berhasil membuat user",
      data: user,
    });
  }
};
