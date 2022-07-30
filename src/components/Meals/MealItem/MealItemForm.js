import React from 'react'
import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {
  
  const inputChangeHandler=(e)=>{
    props.setQty(e.target.value);
  }

  const submitHandler=(event)=>{
    event.preventDefault();

   
  }
  return (
  <form className={classes.form} onSubmit={submitHandler}>
    <div className={classes.container}>
    <label htmlFor='amount'>Choose</label>
    <input type="number" id='amount' min='1' max='5' step='1' defaultValue='1' onChange={inputChangeHandler}  />
    </div>
   
    <button onClick={()=> props.addChange(props.mealitem)}>+ Add</button>
  </form>
  )
}

export default MealItemForm
