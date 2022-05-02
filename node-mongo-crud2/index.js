const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const res = require("express/lib/response");
const ObjectId = require("mongodb").ObjectId;

// use middleware
app.use(cors());
app.use(express.json());

// user :   dbuser2
// password :   vBff6PaHILSNxDhA

const uri =
  "mongodb+srv://dbuser2:vBff6PaHILSNxDhA@cluster0.bgnlt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");

    // GET User : get multiple user
    app.get("/user", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    // POST user : add a user
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
      console.log("User data received", newUser);
    });

    //delete user
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running my node crud server");
});

app.listen(port, () => {
  console.log("Crud server is running");
});
