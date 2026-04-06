import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const addItemToCart = (item, quantity) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex >= 0) {
            const updatedItems = [...cartItems];
            updatedItems[existingItemIndex].quantity += parseInt(quantity);
            setCartItems(updatedItems);
        } else {
            setCartItems((prevItems) => [...prevItems, item]);
        }
        setTotalAmount((prevAmount) => prevAmount + item.price * parseInt(quantity));
        setQuantity((prevQuantity) => prevQuantity + parseInt(quantity));
    };
    const removeItemFromCart = (id) => {
        let removedItemPrice=0;
        setCartItems((prev)=>{
            let updated= prev.map((item)=>{
            if(item.id === id){
               removedItemPrice=item.price;
               if(item.quantity > 1){
             return {
                    ...item, quantity: item.quantity-1
                }
               }else{
                return null;
               }
               
            }
            return item;
        }).filter(Boolean);
        return updated;
        })
         setTotalAmount((prevAmount) => prevAmount - removedItemPrice);
         setQuantity((prevQuantity) => prevQuantity - 1);
    };
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);
    return (
        <CartContext.Provider value={{ items: cartItems, totalAmount, addItem: addItemToCart, removeItem: removeItemFromCart, quantity: quantity }}>
            {children}
        </CartContext.Provider>
    );
}


export default CartProvider;