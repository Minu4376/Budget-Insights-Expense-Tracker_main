import React,{useState} from "react"
import API from "../services/api"
import {useNavigate} from "react-router-dom"

function Login(){

const navigate = useNavigate()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const handleSubmit = async(e)=>{

e.preventDefault()

try{

const res = await API.post("/auth/login",{
email,
password
})

localStorage.setItem("token",res.data.token)

navigate("/dashboard")

}catch(error){

console.log(error.response.data)

alert("Login failed")

}

}


return(

<div className="flex items-center justify-center h-screen bg-gray-100">

<form
onSubmit={handleSubmit}
className="bg-white p-8 rounded shadow w-80"
>

<h2 className="text-2xl font-bold mb-4 text-center">
Login
</h2>

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
className="bg-blue-500 text-white w-full p-2 rounded"
>
Login
</button>

</form>

</div>

)

}

export default Login