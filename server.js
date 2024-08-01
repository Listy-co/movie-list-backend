
require("dotenv").config();

const { PORT } = process.env;

const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send("hello world");
});


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
