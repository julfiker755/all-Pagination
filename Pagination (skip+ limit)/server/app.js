const express = require('express')
const app = express()
const port = process.env.PORT || 2020
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
var cors = require('cors')


// middleware boss
app.use(cors())
app.use(express.json())
// pratic //HRiaLaGC3ReB5qxM
const uri = "mongodb+srv://pratic:HRiaLaGC3ReB5qxM@cluster0.cfrtdkt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {serverApi: {version: ServerApiVersion.v1,strict: true,deprecationErrors: true,}});

async function run() {
  try {
    const database = client.db("All").collection("Data");
    app.get('/product',async(req,res)=>{
      const skip=parseFloat(req.query.skip)
      const limit=parseFloat(req.query.limit)
      const result=await database.find({}).skip(skip).limit(limit).toArray()
      res.send(result)
    })


  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})