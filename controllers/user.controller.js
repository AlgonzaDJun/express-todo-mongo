const User = require("../models/User");

const getAllUser = async (arg) => {
  const users = await User.find();

  res.json({
    message: "berhasil mendapatkan data user",
    data: users,
  });
};

module.exports = {
  getAllUser,
};
