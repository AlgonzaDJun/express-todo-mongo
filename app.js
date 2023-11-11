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
  console.log("Mongodb Connected");
}).catch(() => {
  console.log("Mongodb not connected");
});

// apply global middleware
app.use(cors());
app.use(express.json());

app.use(allRouter);
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint Not Found",
  });
});
