import { useState, useEffect } from "react"
import API from "../services/api"

import ExpenseForm from "../components/ExpenseForm"
import TransactionList from "../components/TransactionList"
import Charts from "../components/Charts"
import BudgetGoal from "../components/BudgetGoal"
import ToggleView from "../components/ToggleView"
import ExportButtons from "../components/ExportButtons"

function Dashboard(){

const [view,setView] = useState("monthly")
const [search,setSearch] = useState("")
const [category,setCategory] = useState("")
const [transactions,setTransactions] = useState([])
const [insight,setInsight] = useState("")


// Filter transactions
const filtered = transactions.filter((t) => {

const matchSearch =
t.title.toLowerCase().includes(search.toLowerCase())

const matchCategory =
category === "" || t.category === category

const transactionDate = new Date(t.date)
const now = new Date()

let matchView = true

if(view === "monthly"){
matchView =
transactionDate.getMonth() === now.getMonth() &&
transactionDate.getFullYear() === now.getFullYear()
}

if(view === "yearly"){
matchView =
transactionDate.getFullYear() === now.getFullYear()
}

return matchSearch && matchCategory && matchView

})


// GET transactions
const fetchTransactions = async ()=>{

try{

const res = await API.get("/transactions")
setTransactions(res.data)

}catch(err){

console.log(err)

}

}


// Load transactions
useEffect(()=>{

fetchTransactions()

},[])


// ADD transaction
const addTransaction = async(data)=>{

try{

await API.post("/transactions",data)
fetchTransactions()

}catch(err){

console.log(err)

}

}


// DELETE transaction
const deleteTransaction = async(id)=>{

try{

await API.delete(`/transactions/${id}`)
fetchTransactions()

}catch(err){

console.log(err)

}

}


// AI Insight
const getInsight = async()=>{

try{

const res = await API.post("/ai/insight",{expenses:transactions})
setInsight(res.data.insight)

}catch(err){

console.log(err)

}

}



return(

<div className="min-h-screen p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

<h1 className="text-3xl font-bold text-white mb-6 text-center">
💰 Budget Tracker
</h1>


<div className="grid md:grid-cols-2 gap-6">


{/* LEFT SIDE */}

<div className="space-y-6 bg-white p-5 rounded-xl shadow-lg">

<ExpenseForm addTransaction={addTransaction}/>

<ToggleView view={view} setView={setView}/>

{/* SEARCH + FILTER */}

<div className="flex gap-3">

<input
type="text"
placeholder="Search transaction..."
className="border p-2 rounded w-full"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<select
className="border p-2 rounded"
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

<option value="">All</option>
<option value="Food">Food</option>
<option value="Travel">Travel</option>
<option value="Bills">Bills</option>
<option value="Shopping">Shopping</option>

</select>

</div>


{/* EXPORT */}

<div className="flex gap-3">

<ExportButtons transactions={transactions}/>

<button
onClick={getInsight}
className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
>
AI Insight
</button>

</div>


{/* AI MESSAGE */}

{insight && (
<div className="bg-purple-100 p-3 rounded text-purple-800">
🤖 {insight}
</div>
)}


<TransactionList
transactions={filtered}
deleteTransaction={deleteTransaction}
/>

</div>



{/* RIGHT SIDE */}

<div className="space-y-6 bg-white p-5 rounded-xl shadow-lg">

<BudgetGoal transactions={transactions}/>

<Charts data={transactions} view={view}/>

</div>


</div>

</div>

)

}

export default Dashboard