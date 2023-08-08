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
      const page=parseFloat(req.query.page) || 0
      const limit=parseFloat(req.query.limit) || 10
      const skip=(page-1)*limit
      let result
        if(page || limit){
          result=await database.find({}).skip(skip).limit(limit).toArray()
        }else{
         result=await database.find({}).toArray()
        }
       
      res.send(result)
    })
    // total productcount
    app.get('/totalcount',async(req,res)=>{
        const result=await  database.estimatedDocumentCount()
        res.send({totalresult:result})
    })
 
    app.get('/',async(req,res)=>{
      res.send('Server is ranning')
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
