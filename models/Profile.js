const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    
    name:String,
    phone:Number,
    email:String,
<<<<<<< HEAD
    password:String,
    googleId:String,
    facebookId:String
=======
    password:String
>>>>>>> 4110ed2b8e3a6cb6bc0ac09ba99712dabd0807ff

});

const Profile = mongoose.model('Profile',schema);
module.exports=Profile;