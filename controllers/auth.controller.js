const User = require("../models/User");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const data = req.body;

  const user = await User.findOne({ email: data.email });

  if (!user) {
    return res.json({ message: "email tidak ditemukan" });
  }

  if (user.password !== data.password) {
    return res.json({ message: "password salah" });
  }

  const token = jwt.sign({ id: user._id, email: user.email }, "secret");

  res.status(200).json({
    message: "berhasil login",
    token,
    userID: user._id,
  });
};

module.exports = {
  login,
};
