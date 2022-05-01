const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

// user : dbuser1
// password : nfLlwf2GRgzolUrK

app.use(cors());
app.use(express.json());

// async function run() {
//   try {
//     await client.connect();
//     const userCollection = client.db("foodExpress").collection("user");
//     const user = { name: "Salman S. Rahman", email: "salmansr1995@gmail.com" };
//     const result = await userCollection.insertOne(user);
//     console.log(`User inserted with ${result.insertedId}`);
//   } finally {
//     //     await client.close();
//   }
// }
// run().catch(console.dir);

async function run() {
  try {
   
    app.post("/user", (req, res) => {
      const newUser = req.body;
      console.log("Adding new user", newUser);
      res.send({ result: "success" });
    });
  } finally {
    //     await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Taskin Asghar from Bangladesh.");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
