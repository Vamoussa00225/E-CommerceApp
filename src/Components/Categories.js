import { ElectroList } from "../datas/ElectroList";
import "../Styles/Categories.css"

function handleSelect(e, option, setOption) {
    let newList = ElectroList;
    if (e.target.value !== "" && e.target.value !== "Trier par une categorie")
        setOption(newList.filter((newList) => newList.category === e.target.value))
    else
        setOption(ElectroList);
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