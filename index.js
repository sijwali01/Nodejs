const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({
  path: ".env",
});

app.get("/", (req, res) => {
  res.send("Hello World hello");
});
app.listen(process.env.PORT, () => {
  console.log(`done" ${process.env.PORT}`);
});
