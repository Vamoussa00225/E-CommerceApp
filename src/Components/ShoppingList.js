import { ElectroList } from "../datas/ElectroList"
import "../Styles/ShoppingList.css"
import Categories from './Categories'
import PlantItem from "./PlantItem.js"

function ShoppingList({ cart, updateCart, option, setOption }) {
	const categories = ElectroList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div className='lmj-shopping-list'>
			<ul>
				<Categories categories={categories} option={option} setOption={setOption} />
			</ul>
			<ul className='lmj-plant-list'>
				{option.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
							cart={cart} updateCart={updateCart}
						/>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
