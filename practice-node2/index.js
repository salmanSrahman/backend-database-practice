const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello Taskin Asghar from Bangladesh.");
});

const users = [
  { id: 1, name: "Taskin Asghar", no: "017000000" },
  { id: 2, name: "Asghar Stanikzai", no: "018111111" },
  { id: 3, name: "Stanikzai", no: "019222222" },
  { id: 4, name: "Hamdullah Mohib Taskin", no: "019222222" },
  { id: 5, name: "Zabiullah Janat", no: "0154444444" },
  { id: 6, name: "Mohammad Nabi Eishakhell", no: "0193334443" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    console.log("Query", req.query.name);
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.send(user);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
