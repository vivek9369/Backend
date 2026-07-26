const generateToken = require("../config/token");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs")

const signUp = async (req, res) =>{
    try {
        const {firstName, lastName, email, password, userName} = req.body
        
        if(!firstName || !lastName || !email || !password || !userName) {
         return res.status(400).json({message:""})

        }

        let existUser = await User.findOne({email})
        if(existUser) {
            return res.status(400).json({message:"User already exist"})
        }
        
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({
        firstName,
        lastName,
        email,
        password:hashedPassword,
        userName
    })
    let token ;
     try {
      token = generateToken(user._id)
    } catch (error) {
        console.log(error);
    } 

    res.cookie("token", token,{
        httpOnly:true,
        secure:process.env.NODE_ENVIRONMENT == "production",
        sameSite:"strict",
        maxAge:7*24*60*60*1000
    })


     return res.status(201).json({user:{
         firstName,
        lastName,
        email,
        userName
     }})
    } catch (error) {
        console.error("Signup Error:", error)
        return res.status(500).json({message:"Internal server error", error: error.message})
    }
}


module.exports = signUp;