import "../Styles/PlantItem.css"
// import CareScale from "./CareScale"

function handleClick(e) {
    // console.log(`Vous voulez acheter 1 ${plantName} ? Tres bon choix`);
    console.log(e);
}



function PlantItem({ name, cover, price, light, water, id, cart, updateCart }) {

    function addToCart(name, price) {
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
        <div key={id} className='lmj-plant-item' onClick={(e) => handleClick(e)}>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            <div className="Info">
                {name}
                <a href="#"><button onClick={() => addToCart(name, price)}></button>Ajouter au panier</a>
            </div>
        </div>
    )
}

export default PlantItem