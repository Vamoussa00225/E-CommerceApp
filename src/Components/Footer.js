import { useState } from 'react'
import '../Styles/Footer.css'

function handleBlur(value){
    return(!value.includes("@") && alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide"))
}

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer fixed-bottom'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <textarea 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => handleBlur(inputValue)}
            />
		</footer>
	)
}

export default Footer