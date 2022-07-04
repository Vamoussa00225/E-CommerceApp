import "../Styles/Cart.css"
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";

function Cart({ cart, updateCart }) {
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	function handleDelete({name}) {
		let newCart;
		newCart = cart.filter(card => card.name !== name);
		updateCart(newCart)
	}

	return (
		<div className="dd">
			<div className="dd-a"><span><FaShoppingCart/>{
				// cart?.map(item => item.amount)?.reduce((prev, curr) => prev + curr)
				cart.length? cart.reduce((a,cart) => a + (cart.amount || 0), 0) : ""
			}</span></div>
			<input type="checkbox" />
			<div className='dd-c'>
				{cart.length > 0 ? (
					<div>
						<h2>Panier</h2>
						<ul>
							{
							cart.map(({ name, price, amount }, index) => (
								<li key={`${name}-${index}`} value={index}>
									{name} {price}€ x {amount}  <button className="trash" onClick={() => handleDelete({name})}><FaTrashAlt /></button>
								</li>
							))}
						</ul>
						<h3>Total :{total}€</h3>
						<button onClick={() => updateCart([])}>Vider le panier</button>
					</div>
				) : (
					<div>Votre panier est vide</div>
				)}
			</div>
		</div>
	)
}

export default Cart