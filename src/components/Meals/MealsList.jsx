import React from 'react'
import { DUMMY_MEALS } from '../../data/dummy-meal'

const MealsList = () => {
  return (
    <div className='bg-light shadow-lg p-4 rounded-4 w-75 mx-auto'  style={{marginTop: "150px"}}>
        {DUMMY_MEALS.map((meal) => (
            <div key={meal.id} className='border-2 border-bottom'>
                <h5 className='mb-1 fw-bold'>{meal.name}</h5>
                <p className='fst-italic mb-1'>{meal.description}</p>
                <p className='amount fw-semibold'>Price: ${meal.price.toFixed(2)}</p>
            </div>
        ))}
    </div>
  )
}

export default MealsList