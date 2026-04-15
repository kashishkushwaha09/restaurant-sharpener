import React, { useContext } from 'react'
import { ShoesContext } from '../context/shoes/ShoesContext';
import CardWrapper from './UI/CardWrapper';

const ShoeCard = ({ shoe }) => {
   const {addToCart}=useContext(ShoesContext);
  
    
  return (
    <CardWrapper>
    
          <h5 className="card-title fw-bold text-white">{shoe.name}</h5>
          <p className="card-text text-white">{shoe.desc}</p>

          <h6 className="text-white fw-semibold mb-3">
            ₹{shoe.price}
          </h6>

         <div className="d-flex justify-content-evenly">
  <button className="btn btn-dark btn-sm" onClick={()=>addToCart(shoe,1)}>
    Buy L ({shoe.large})
  </button>

  <button className="btn btn-secondary btn-sm"  onClick={()=>addToCart(shoe,2)}>
    Buy M ({shoe.medium})
  </button>

  <button className="btn btn-warning btn-sm"  onClick={()=>addToCart(shoe,3)}>
    Buy S ({shoe.small})
  </button>
</div>
        
    </CardWrapper>
    
  );
};


export default ShoeCard;