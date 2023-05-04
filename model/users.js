const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
      
    },
    email:
    {
        type:String,
        required:true
    },
    mno:
    {
    type:String,
    required:true
    }
});

const user = new mongoose.model("users",userSchema);
module.exports = user ;
