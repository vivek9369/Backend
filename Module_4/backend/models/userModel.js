const mongoose= require("mongoose");

const userSchema  = new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
      email:{
        type:String,
        required:true,
        unique:true
    },
      password:{
        type:String,
        required:true,
    },
      profileImage:{
        type:String,
        required:false,
    }
},{timestamps:true})

const User = mongoose.model("User", userSchema);

module.exports=  User;