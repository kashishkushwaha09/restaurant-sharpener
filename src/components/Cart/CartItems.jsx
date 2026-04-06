import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

const CartItems = ({ onClose}) => {
    const { items, totalAmount} = useContext(CartContext);
    return (
        <div className="bg-white p-4 rounded-3  w-50" style={{ width: "" }}>
            {/* cart item  */}

            <div  className="border-bottom border-2 py-3 d-flex flex-column justify-content-between align-items-center w-100">
                {items.map((meal) => (
                    <CartItem key={meal.id} meal={meal} />
                //     <div key={meal.id} className="border-bottom border-2 py-3 d-flex justify-content-between align-items-center w-100">

                //     {/* Left side */}
                //     <div  className='w-100'>
                //         <h5 className='mb-1 fw-bold'>{meal?.name || "name"}</h5>
                //         <div className='d-flex justify-content-between w-25'> <p className='amount fw-semibold'> ${meal?.price.toFixed(2) || "2.00"}</p>
                //             <p className='fw-semibold amount'>x {meal?.quantity || 1}</p></div>

                //     </div>
                //     {/* Right side */}
                //     <div className='d-flex gap-2'>
                //         <button className='btn shadow-sm fw-bold fs-4 px-3 py-0 border-0' onClick={()=>removeItem(meal.id)}>-</button>
                //         <button className='btn shadow-sm fw-bold fs-4 px-3 py-0 border-0'>+</button>
                //     </div>
                // </div>
                ))}
                
                <div className="d-flex justify-content-between align-items-center my-3 fw-bold w-100">
                    <h6 className='fw-bold'>Total Amount</h6>
                    <h6 className='fw-bold'>$ {totalAmount.toFixed(2)}</h6>
                </div>

                <div className="d-flex justify-content-end gap-3 w-100">
                    <button className="btn close-btn rounded-pill px-4 py-0 fw-medium shadow border" onClick={onClose}>
                        Close
                    </button>
                    <button className="btn add-btn rounded-pill px-4 py-1">Order</button>
                </div>
            </div>
        </div>
    )
}

export default CartItems