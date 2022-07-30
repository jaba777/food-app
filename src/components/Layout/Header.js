import React from 'react'

import HeaderCartButton from './HeaderCartButton'
import mealsimage from "../../assets/meals.jpg"

import classes from './Header.module.css'

const Header = (props) => {
  return (
  <>
    <header className={classes.header}>
      <h1>Reactmeals</h1>
      <HeaderCartButton onClick={props.onShowCart} onExpress={props.onExpress} />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsimage} alt='A table full of delicious food!' />
    </div>
  </>
  )
}

export default Header
