const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");
const { allRouter } = require("./routes");
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
db.then(() => {
  console.log("berhasil koneksi");
}).catch(() => {
  console.log("gagal konseksi");
});

app.use(express.json());
app.use(cors());
app.use(allRouter);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
