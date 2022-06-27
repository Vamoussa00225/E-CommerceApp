import Sun from '../Assets/sun.svg'
import Water from '../Assets/water.svg'

function handleClick(scaleValue, careType){
    let value = "beaucoup"
    let type = "de lumiere"
    if (scaleValue === 1)
        value = "peu"
    else if (scaleValue === 2)
        value = "moderement"

    if (careType === "water")
        type = "d'arrosage"

    alert(`Cette plante requiert ${value} ${type} et il s'agit d'un composant CareScale de type ${careType}`);
}
 
function CareScale ({scaleValue, careType}) {
    const range = [1, 2, 3]

    const scaleType =  careType === 'light' ? (<img src={Sun} alt='sun-icon' />) : (<img src={Water} alt='water-icon' />)

    return (
        <div onClick={() => handleClick(scaleValue, careType)}>
            {range.map((rangeElem) => (
                scaleValue >= rangeElem && <span key={rangeElem.toString()}>{scaleType}</span>
            ))}
        </div>
    )
}
export default CareScale