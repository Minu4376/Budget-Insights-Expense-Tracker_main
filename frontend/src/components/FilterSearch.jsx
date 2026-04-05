function FilterSearch({setSearch,setCategory}){

return(

<div className="flex gap-2 mb-4">

<input
className="border p-2 w-full"
placeholder="Search transaction"
onChange={(e)=>setSearch(e.target.value)}
/>

<select
className="border p-2"
onChange={(e)=>setCategory(e.target.value)}
>

<option value="">All</option>
<option>Food</option>
<option>Transport</option>
<option>Bills</option>
<option>Shopping</option>

</select>

</div>

)

}

export default FilterSearch