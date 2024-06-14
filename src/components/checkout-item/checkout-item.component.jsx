import {CheckoutItemContainer, ImageContainer, Detail, Arrow, Value, RemoveButton} from './checkout-item.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';



const CheckOutItem = ({cartItem}) => {

  const {addItemToCart, removeItemFromCart, clearCart} = useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);

  const reduceItemHandler = () => removeItemFromCart(cartItem);

  const removeHandler = () => clearCart(cartItem);

  const { name, imageUrl, price, quantity} = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
         <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Detail>{name}</Detail>
      <Detail>
        <Arrow onClick={reduceItemHandler}> &#10094; </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}> &#10095; </Arrow>
        </Detail>
      <Detail> ${price}</Detail>
      <RemoveButton onClick={removeHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckOutItem;