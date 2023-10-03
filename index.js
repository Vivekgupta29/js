const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/webpages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/webpages/about.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname + "/webpages/blog.html"));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
