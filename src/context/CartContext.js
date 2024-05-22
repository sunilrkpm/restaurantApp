import React from 'react'

const CartContext = React.createContext({
  quantity: 0,
  menuList: [],
  addItemToCart: () => {},
  onIncreseQuantity: () => {},
  onDecreseQuantity: () => {},
})

export default CartContext
