import React from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const totalNumber=props.onExpress.reduce((a,b)=>a+b.price * +props.qty,0)
    

  return (
    <Modal onClick={props.onClose}>
      {props.onExpress.length === 0  ?(
        <h1>Cart is Empty</h1>
      ): (
        <>
        {props.onExpress.map((item,index)=>{
        return(
          <div key={index}>
          {item.name}
          <div className={classes.total}> 
            <span>{item.description}</span>
            <span>X{props.qty}</span>
            <span>${item.price}</span>
          </div>
          <button onClick={()=>props.onRemove(item)} className={classes.removebtn}>Remove</button>
          </div>
        )
      })}
       <div className={classes.actions}>
            <p>Total Price: ${totalNumber.toFixed(2)}</p>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            <button className={classes.button}>Order</button>
        </div>
        </>
      )}
    </Modal>
  )
}

export default Cart
