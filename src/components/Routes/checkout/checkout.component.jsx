import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../contexts/cart-context';
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles';
import CheckOutItem from '../../checkout-item/checkout-item.component';

const CheckOut = () => {

  const { cartItems, cartTotal } = useContext(CartContext);

return(
  <CheckoutContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {
      cartItems.map((cartItem) => {
        return(
          <CheckOutItem key={cartItem.id} cartItem = {cartItem} />
        )
      } )
    }
    <Total>Total: ${cartTotal}</Total>
  </CheckoutContainer>
)
}

export default CheckOut;