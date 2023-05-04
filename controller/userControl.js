const userModel = require("../model/users");

const addUser = async(req,res)=>
{
    try
    {
        const user = new userModel(req.body);
        const userData = await user.save();
        res.json({
            success:true,
            message:"The user data saves",
            record:userData
        })
    }
    catch(error)
    {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}


module.exports = 
 {
    addUser
 }