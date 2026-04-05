import jsPDF from "jspdf"
import Papa from "papaparse"

function ExportButtons({transactions}){

const exportCSV = ()=>{

const csv = Papa.unparse(transactions)

const blob = new Blob([csv])

const url = window.URL.createObjectURL(blob)

const a = document.createElement("a")

a.href = url
a.download = "transactions.csv"

a.click()

}

const exportPDF = ()=>{

const doc = new jsPDF()

let y = 10

transactions.forEach(t=>{

doc.text(`${t.title} - ₹${t.amount} - ${t.category}`,10,y)

y += 10

})

doc.save("transactions.pdf")

}

return(

<div className="flex gap-3 mt-3">

<button
onClick={exportCSV}
className="bg-green-500 text-white px-4 py-2 rounded"
>
Export CSV
</button>

<button
onClick={exportPDF}
className="bg-red-500 text-white px-4 py-2 rounded"
>
Export PDF
</button>

</div>

)

}

export default ExportButtons