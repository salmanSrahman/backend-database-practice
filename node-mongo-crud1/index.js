const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// user : dbuser1
// password : nfLlwf2GRgzolUrK

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://dbuser1:nfLlwf2GRgzolUrK@cluster0.bgnlt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Db conncected");
  client.close();
});

app.get("/", (req, res) => {
  res.send("Hello Taskin Asghar from Bangladesh.");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
