import Button from '../Button/Button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import CartItem from '../cart-item/Cart-Item.component';
import { CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    return navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)):
          (<EmptyMessage>Your Cart is empty</EmptyMessage>)
        }
        
      </CartItems>
      <Button onClick={checkoutHandler} buttonText='GO TO CHECKOUT' />
    </CartDropdownContainer>
  )
}

export default CartDropdown;


