import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, Cell } from "recharts"

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"]

function Charts({ data }) {

if (data.length === 0) return <p>No Data</p>

return (

<div className="bg-white p-4 shadow rounded flex flex-wrap gap-6 justify-center">

<PieChart width={300} height={300}>

<Pie
data={data}
dataKey="amount"
nameKey="category"
outerRadius={100}
label
>

{data.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}

</Pie>

<Tooltip/>

</PieChart>

<BarChart width={350} height={250} data={data}>

<XAxis dataKey="category"/>
<YAxis/>
<Tooltip/>

<Bar dataKey="amount">

{data.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}

</Bar>

</BarChart>

</div>

)

}

export default Charts