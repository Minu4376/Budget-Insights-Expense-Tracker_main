const Transaction = require("../models/Transaction")

exports.getTransactions = async(req,res)=>{

try{

const data = await Transaction.find({ user: req.user.id })

res.json(data)

}catch(err){

console.log(err)

res.status(500).json({message:"Server error"})

}

}

exports.addTransaction = async(req,res)=>{

try{

const {title,amount,category,type,date} = req.body

const newTransaction = await Transaction.create({
title,
amount,
category,
type,
date,
user:req.user.id
})

res.json(newTransaction)

}catch(err){

console.log(err)

res.status(500).json({message:"Server error"})

}

}
exports.deleteTransaction = async (req,res)=>{

await Transaction.findByIdAndDelete(req.params.id)

res.json({message:"Deleted"})

}