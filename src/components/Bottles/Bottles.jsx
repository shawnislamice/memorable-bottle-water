import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { storedCart, addToLocalStorage, removeFromLocalStorage } from "../../Utlities/LocalStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    console.log(bottles.length);
    if (bottles.length > 0) {
      const getStoredCart = storedCart();
      const savedCart = [];
      for (const id of getStoredCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLocalStorage(bottle.id);
  };

  const handleRemoveCart=(id)=>{
    const remainingCart=cart.filter(bottle=> bottle.id !==id)
    setCart(remainingCart)
    removeFromLocalStorage(id)
  }
  return (
    <div>
      <h2>Bottles Available:{bottles.length}</h2>
      <h2>Cart: {cart.length}</h2>
      <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
