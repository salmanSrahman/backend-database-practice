const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

// user : dbuser1
// password : nfLlwf2GRgzolUrK

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://dbuser1:nfLlwf2GRgzolUrK@cluster0.bgnlt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");

    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("Adding new user", newUser);
      // const result = await userCollection.insertOne(newUser);
      // res.send(result);
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
