import "../Styles/Cart.css"
import { useEffect, useState } from "react"
import { FaTrashAlt } from "react-icons/fa";

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	// const [delValue, setDelValue] = useState(0);
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	
	function handleDelete(e) {
		e.preventDefault()
		console.log(e);
	}

	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`;
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<li key={`${name}-${index}`} value={index} onClick={handleDelete}>
								{name} {price}€ x {amount}  <a href="\"><FaTrashAlt /></a>
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
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart