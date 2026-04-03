import React from 'react'
import { DUMMY_MEALS } from '../../data/dummy-meal'
import MealItem from './MealItem'

const MealsList = () => {
  return (
    <div className='bg-light shadow-lg p-4 rounded-4 w-75 mx-auto'  style={{marginTop: "150px"}}>
        {DUMMY_MEALS.map((meal) => (
             <MealItem key={meal.id} meal={meal}/>
           
        ))}
    </div>
  )
}

export default MealsList