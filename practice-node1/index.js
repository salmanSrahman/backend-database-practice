const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Taskin", no: "017000000" },
  { id: 2, name: "Asghar", no: "018111111" },
  { id: 3, name: "Stanikzai", no: "019222222" },
];
app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
