import React from 'react'

const MealItem = ({ meal }) => {
    return (
        <div className="border-bottom border-2 py-3 d-flex justify-content-between align-items-center">

            {/* Left side */}
            <div key={meal.id} className='border-2 border-bottom'>
                <h5 className='mb-1 fw-bold'>{meal.name}</h5>
                <p className='fst-italic mb-1'>{meal.description}</p>
                <p className='amount fw-semibold'>Price: ${meal.price.toFixed(2)}</p>
            </div>
            {/* Right side */}
            <form className="d-flex flex-column align-items-end gap-2">
                <div className='d-flex gap-2 align-items-center'> <h6 className='mb-0'>Quantity</h6>
                    <input
                        type="number"
                        min="1"
                        max="100"

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