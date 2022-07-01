import "../Styles/ShoppingList.css"

import PlantItem from "./PlantItem.js"

function ShoppingList({ cart, updateCart, option, setOption }) {
	
	return (
		<div className='lmj-shopping-list'>
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
