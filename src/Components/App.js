import Banner from "./Banner.js"
import Cart from "./Cart.js"
import ShoppingList from "./ShoppingList.js";
import Footer from "./Footer.js";
import Logo from "../Assets/Electro/Logo.png"
import { useEffect, useState } from "react";
import { ElectroList } from "../datas/ElectroList.js";
import Categories from "./Categories.js";

function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [option, setOption] = useState(ElectroList);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className="main">
      <Banner>
        <img src={Logo} className="lmj-logo" alt="La maison jungle" />
      </Banner>
      <div className='lmj-layout-inner'>
        <div className="header">
          <Cart cart={cart} updateCart={updateCart} />
          <Categories option={option} setOption={setOption} />
        </div>
        <ShoppingList cart={cart} updateCart={updateCart} option={option} setOption={setOption} />
      </div>
    </div>
  );
}

export default App;
