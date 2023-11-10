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

  // set req.headers.authorization
  req.headers.authorization = `Bearer ${token}`;

  res.status(200).json({
    message: "berhasil login",
    token,
    userID: user._id,
  });
};

const register = async (arg) => {
  let data = req.body;

  const { name, username, email, password } = data;

  if (!name || !username || !email || !password) {
    return res.json({ message: "semua field harus diisi" });
  }

  try {
    const user = await User.create(data);

    res.status(200).json({
      message: "berhasil membuat user",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "gagal membuat user",
      error: error.message,
    });
  }
};

module.exports = {
  login,
  register
};
