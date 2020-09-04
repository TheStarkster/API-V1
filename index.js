const express= require("express")
const bodyParser = require("body-parser")
const app=express()
const mongoose=require("mongoose")
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const PORT = process.env.PORT||3000


mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true , useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use(bodyParser.json())

//paths for version one APIs...
app.use('/v1',require('./routers/v1/path'))

app.listen(PORT,()=>{
    console.log('Server running')
})