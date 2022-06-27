import { ElectroList } from "../datas/ElectroList";

function handleSelect(e, option, setOption){
    let newList = ElectroList;
    if (e.target.value !== "" && e.target.value !== "Trier par une categorie")
        setOption(newList.filter((newList) => newList.category === e.target.value))
    else
        setOption( ElectroList);
}

function Categories({categories, option, setOption}) {
    return (
        <div className='lmj-categories'>
            <select onChange={(e) => handleSelect(e, option, setOption)} className='lmj-categories-select'>
                <option>Trier par une categorie</option>
                {categories?.map((category) => {
                    return (<option key={category} >{category}</option>)
                })}
            </select>
            <button onClick={(e) => handleSelect(e, option, setOption)}>Reinitialiser</button>
        </div>
    )
}

export default Categories;