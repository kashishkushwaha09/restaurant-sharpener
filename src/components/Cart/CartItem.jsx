import React, { useContext } from 'react'
import { CartContext } from '../../context/meal/CartContext';


const CartItem = ({ meal }) => {
  const { removeItem} = useContext(CartContext);
  return (
    <div className="border-bottom border-2 py-3 d-flex justify-content-between align-items-center w-100">

      {/* Left side */}
      <div className="w-100">
        <h5 className="mb-1 fw-bold">
          {meal?.name || "name"}
        </h5>

        <div className="d-flex justify-content-between w-25">
          <p className="amount fw-semibold">
            ${meal?.price ? meal.price.toFixed(2) : "2.00"}
          </p>

          <p className="fw-semibold amount">
            x {meal?.quantity || 1}
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="d-flex gap-2">
        <button
          className="btn shadow-sm fw-bold fs-4 px-3 py-0 border-0"
          onClick={() => removeItem(meal.id)}
        >
          -
        </button>

        <button
          className="btn shadow-sm fw-bold fs-4 px-3 py-0 border-0"
        //   onClick={() => onAdd(meal)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;