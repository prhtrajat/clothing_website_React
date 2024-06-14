import {CartItemContainer, ItemDetails, ItemName} from './Cart-Item.styles';

const CartItem = ({cartItem}) => {
  const {name, quantity, imageUrl, price} = cartItem;
  return(
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
      <ItemName>{name}</ItemName>
      <span>{quantity} x ${price}</span>
      </ItemDetails>
      
    </CartItemContainer>
  )
}

export default CartItem;