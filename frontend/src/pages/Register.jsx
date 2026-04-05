import React,{useState} from "react"
import API from "../services/api"
import {useNavigate} from "react-router-dom"

function Register(){

const navigate = useNavigate()

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const handleSubmit = async(e)=>{

e.preventDefault()

await API.post("/auth/register",{name,email,password})

navigate("/")

}

return(

<div className="flex items-center justify-center h-screen bg-gray-100">

<form
onSubmit={handleSubmit}
className="bg-white p-8 rounded shadow w-80"
>

<h2 className="text-2xl font-bold mb-4 text-center">
Register
</h2>

<input
type="text"
placeholder="Name"
className="border p-2 w-full mb-3"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
className="border p-2 w-full mb-3"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="border p-2 w-full mb-3"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="bg-green-500 text-white w-full p-2 rounded"
>
Register
</button>

</form>

</div>

)

}

export default Register