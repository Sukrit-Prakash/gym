const mongoose = require('mongoose')

const Schema =  mongoose.Schema;
const detailSchema =new Schema({
  age:{
    requred:true,
    type:Number
  },
  weight:{
    required:true,
    type:Number
  },
  height:{
    required:true,
    type:Number
  }
})
module.exports = mongoose.model("Profile",detailSchema)