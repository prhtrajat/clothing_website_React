import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if(existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
    {...cartItem, quantity: cartItem.quantity + 1}
    : cartItem
  )
  }  

  return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToRemove) => {
 
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  )

  if(existingCartItem.quantity === 1){
    return cartItems.filter((cartItem) => {
      return cartItem.id != productToRemove.id
    })
  }

  return cartItems.map((cartItem) => cartItem.id === productToRemove.id ?
  {...cartItem, quantity: cartItem.quantity - 1}
  : cartItem
)
}

const clearCheckOutItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id != productToClear.id
  })
}



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {}
});


export const CartProvider = ({children}) => {

  const [cartItems, setCartItems] = useState([]);
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
     const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
     setCartCount(newCartCount);
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  }

  const clearCart = (productToClear) => {
    setCartItems(clearCheckOutItem(cartItems, productToClear));
  }

  const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, removeItemFromCart, cartCount, clearCart, cartTotal};
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
