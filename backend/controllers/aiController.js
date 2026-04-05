exports.getInsight = async(req,res)=>{

const {expenses} = req.body

let total = expenses.reduce((a,b)=> a + b.amount ,0)

let message = "Your spending looks balanced."

if(total > 10000){
message = " Warning: You are spending too much this month."
}

if(total < 3000){
message = " Great! Your spending is well controlled."
}

res.json({insight:message})

}