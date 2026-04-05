import React from "react"

function ToggleView({ view, setView }) {

return(

<div className="mb-4 flex items-center gap-3">

<button
className={`px-4 py-2 rounded text-white ${
view === "monthly" ? "bg-blue-600" : "bg-gray-400"
}`}
onClick={()=>setView("monthly")}
>

Monthly

</button>

<button
className={`px-4 py-2 rounded text-white ${
view === "yearly" ? "bg-purple-600" : "bg-gray-400"
}`}
onClick={()=>setView("yearly")}
>

Yearly

</button>

<p className="ml-4 font-semibold">
Current View: {view}
</p>

</div>

)

}

export default ToggleView