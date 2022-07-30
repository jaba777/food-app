import React from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

const Meals = (props) => {
  return (
   <>
   <MealsSummary />
   <AvailableMeals addChange={props.addChange} setQty={props.setQty} />
   </>
  )
}

export default Meals
