const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello Taskin Asghar Stanikzai from Bangladesh");
});

app.listen(port, () => {
  console.log("Listen to port", port);
});
