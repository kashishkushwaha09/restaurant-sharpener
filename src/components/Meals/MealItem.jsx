import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/meal/CartContext';


const MealItem = ({ meal }) => {
    const [quantity, setQuantity] = useState(meal?.quantity || 1);
    const { addItem } = useContext(CartContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(quantity < 1 || quantity > 100) {
            alert("Please enter a quantity between 1 and 100.");
            return;
        }

        addItem({ ...meal, quantity: parseInt(quantity) },quantity);
        alert(`${quantity} ${meal.name}(s) added to cart!`);
    };

    return (
        <div className="border-bottom border-2 py-3 d-flex justify-content-between align-items-center">

            {/* Left side */}
            <div key={meal.id} className='border-2 border-bottom'>
                <h5 className='mb-1 fw-bold'>{meal.name}</h5>
                <p className='fst-italic mb-1'>{meal.description}</p>
                <p className='amount fw-semibold'>Price: ${meal.price.toFixed(2)}</p>
            </div>
            {/* Right side */}
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-end gap-2">
                <div className='d-flex gap-2 align-items-center'> <h6 className='mb-0'>Quantity</h6>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}       
                        className="form-control"
                        style={{ width: "70px" }}
                    />
                </div>

                <button className="btn add-btn fw-semibold rounded-pill px-4 py-1" type="submit">
                    +Add
                </button>

            </form>
        </div>
    )
}

export default MealItem