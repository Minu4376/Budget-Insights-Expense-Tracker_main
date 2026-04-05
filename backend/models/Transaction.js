const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({

title:String,
amount:Number,
category:String,
type:String,
date:{
type:Date,
default:Date.now
},
user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
}

})

module.exports = mongoose.model("Transaction",transactionSchema)