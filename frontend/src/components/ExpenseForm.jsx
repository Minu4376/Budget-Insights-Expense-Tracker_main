import { useState } from "react"

function ExpenseForm({ addTransaction }) {

const [title,setTitle] = useState("")
const [amount,setAmount] = useState("")
const [category,setCategory] = useState("Food")
const [date,setDate] = useState("")

const submit = (e)=>{

e.preventDefault()

addTransaction({
title,
amount:Number(amount),
category,
type:"expense",
date
})

setTitle("")
setAmount("")
setDate("")
setCategory("Food")

}

return(

<form onSubmit={submit} className="bg-white p-6 rounded-xl shadow-lg space-y-3">

<h2 className="text-lg font-bold text-gray-700">
Add Expense
</h2>

<input
className="border p-2 w-full rounded"
placeholder="Expense Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
required
/>

<input
type="number"
className="border p-2 w-full rounded"
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
required
/>

<input
type="date"
className="border p-2 w-full rounded"
value={date}
onChange={(e)=>setDate(e.target.value)}
required
/>

<select
className="border p-2 w-full rounded"
value={category}
onChange={(e)=>setCategory(e.target.value)}
required
>
<option value="Food">Food</option>
<option value="Transport">Transport</option>
<option value="Bills">Bills</option>
<option value="Shopping">Shopping</option>
</select>

<button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transform text-white font-semibold px-4 py-2 rounded-lg w-full shadow-md transition duration-300">
Add Expense
</button>

</form>

)

}

export default ExpenseForm