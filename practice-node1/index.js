const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(
    "Hello My Lala Jan. How are you? I am your younger brother Taskin Asghar from Afghanistan."
  );
});

app.listen(port, () => {
  console.log("listening on port", port);
});
