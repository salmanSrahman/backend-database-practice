const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Taskin", no: "017000000" },
  { id: 2, name: "Asghar", no: "018111111" },
  { id: 3, name: "Stanikzai", no: "019222222" },
  { id: 4, name: "Hamdullah Mohib", no: "019222222" },
  { id: 5, name: "Zabiullah Janat", no: "0154444444" },
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

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
