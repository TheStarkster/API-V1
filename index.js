const express= require("express")
const bodyParser = require("body-parser")
const app=express()
const mongoose=require("mongoose")
require("dotenv").config();
const cookieSession = require('cookie-session')
const passport = require("passport");

//requiring facebook strategy...
require("./functions/auth/passport");

const PORT = process.env.PORT || 9000;

app.use(cookieSession({
  name: 'test',
  keys: ['key1', 'key2']
}))

//passport configs...
app.use(passport.initialize());
app.use(passport.session());

// mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true , useUnifiedTopology: true})
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));


app.use(bodyParser.json())

//paths for version one APIs...
app.use('/v1',require('./routers/v1/path'))

app.listen(PORT,()=>{
    console.log('Server running')
})