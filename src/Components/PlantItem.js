import "../Styles/PlantItem.css"

function PlantItem({ name, cover, price, light, water, id, cart, updateCart }) {

    function addToCart(e, name, price) {
        e.preventDefault()
        const currentPlantSaved = cart?.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div key={id} className='lmj-plant-item'>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            <div className="name">{name}</div>
            <div className="Info">
                <a href="google.com" onClick={(e) => addToCart(e, name, price)}><button>Ajouter au panier</button></a>
            </div>
        </div>
    )
}

export default PlantItem