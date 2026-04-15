import React, { useEffect, useState } from 'react'
import { ShoesContext } from './ShoesContext'
import { DUMMY_SHOES } from '../../data/dummy-shoes';
import { getProductRecommendations } from '../../gemini';

const ShoesProvider = ({ children }) => {
    const shoesData = DUMMY_SHOES;
    const [items, setItems] = useState(shoesData);
    const [cartItems, setCartItems] = useState([]);
    const [recommended, setRecommended] = useState([]);
const [loading, setLoading] = useState(false);
   

    const addItems = (data) => {

        const newItems = {
            ...data,
            id: Date.now(),
            price: Number(data.price),
            large: Number(data.large),
            medium: Number(data.medium),
            small: Number(data.small)
        };
        setItems(prev => ([...prev, newItems]))
    }
   const addToCart = (item, size) => {
  setCartItems((prev) => {
    const key =
      size === 1 ? "largeQuantity" :
      size === 2 ? "mediumQuantity" :
      "smallQuantity";

    const exists=prev.some((i)=>i.id==item.id);
    if(exists){
     return prev.map((i)=>i.id==item.id? {...i, [key]: (i[key] || 0)+1, totalPrice:(i.totalPrice || 0)+item.price}  : i)
    }else{
         return [...prev , {
            id: item.id,
            price: item.price,
            name:item.name,
            largeQuantity:size===1 ? 1 : 0,
            mediumQuantity :size===2 ? 1 : 0,
            smallQuantity: size===3 ? 1 : 0,
            totalPrice:item.price
         }]
    }
  });

  setItems((prev) => {
    const key =
      size === 1 ? "large" :
      size === 2 ? "medium" :
      "small";

    return prev.map((i) =>
      i.id === item.id ? { ...i, [key]: i[key] - 1 } : i
    );
  });
};
    useEffect(()=>{
        const fetchRecommendations = async () => {
    if (!cartItems?.length) return;

    try {
      setLoading(true);

      const data = await getProductRecommendations(cartItems, items);

      setRecommended(data);

    } catch (err) {
      console.error("Recommendation error", err);

      // fallback (important)
      setRecommended(items.slice(0, 5));

    } finally {
      setLoading(false);
    }
  };

  fetchRecommendations();
    },[cartItems])
    return (
        <ShoesContext.Provider value={{ items, addItems ,addToCart,cartItems,recommended,loading}}>
            {children}
        </ShoesContext.Provider>
    )
}

export default ShoesProvider