import { ElectroList } from "../datas/ElectroList";
import "../Styles/Categories.css"

var newList = ElectroList;
function handleSelect(e, option, setOption) {
    if (e.target.value !== "" && e.target.value !== "Trier par marque")
        setOption(newList.filter((newList) => newList.category === e.target.value))
    else
        setOption(ElectroList);
}

function handleSearch(e, setOption) {
    setOption(newList.filter((elem) => elem.name?.toLowerCase().includes(e.target.value.toLowerCase())))
}

function Categories({ option, setOption }) {
    const categories = ElectroList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div className='lmj-categories'>
            <select onChange={(e) => handleSelect(e, option, setOption)} className='lmj-categories-select'>
                <option>Trier par marque</option>
                {categories?.map((category) => {
                    return (<option key={category} >{category}</option>)
                })}
            </select>
            <button onClick={(e) => handleSelect(e, option, setOption)}>Reinitialiser</button>
            <div className="search_div">
                <input type="text" placeholder="🔍   Search" onChange={(e) => handleSearch(e, setOption)}></input>
            </div>
        </div>
    )
}

export default Categories;