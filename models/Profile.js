const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    
    name:String,
    phone:Number,
    email:String,
    password:String

});

const Profile = mongoose.model('Profile',schema);
module.exports=Profile;