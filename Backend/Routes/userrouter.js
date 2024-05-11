
const express = require('express')
const User= require('../usermodel')
const router = express.Router();
const bcrypt = require('bcryptjs')
router.post('/signup', async (req,res,next)=>{
    console.log(req.body)
    //for existing user
    let existinguser;
    //cannot define inside try block
    try {
         existinguser =await User.findOne({email:req.body.email})
    } catch (error) {
        console.log(error)
    }
    if(existinguser)
        {
            return res.status(201).json({message:"user already present"})
        }
        //for hashed password
        const hashedpassword = bcrypt.hashSync(req.body.password)
  const user = new User({
    name:req.body.name,
    email:req.body.email,
    // password:req.body.password
    password:hashedpassword
  })
  try{
   await user.save()
  }
  catch(err){
   console.log(err)
  }

  return res.status(201).json({message:user})
})
//controller not set for signup
//login route
router.post('/login',async (req,res,next)=>{
    let existinguser;
    
    try {
        existinguser = await User.findOne({email:req.body.email})
    } catch (error) {
        console.log(error)
    }
    if(!existinguser)
        {
            return res.json({message:"user does not exists"})
        }
    
    // we need the password for that email
    const passwordx = existinguser.password
    const check = bcrypt.compareSync(req.body.password,passwordx)
    if(check)
        {
            res.json({message:"user successfully logged in"})
        }
    else 
    {
        res.json({message:"incorrect password"})
    }
    
})


module.exports = router