import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import Button, {Button_Type_Classes} from '../Button/Button.component';
import {ProductCardContainer, Footer, Name, Price} from './ProductCard.styles';

const ProductCard = ({product}) => {

  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return <ProductCardContainer>
    <img src={imageUrl} alt={`${name}`}/>
    <Footer>
      <Name>{name}</Name>
      <Price>{price}</Price>
    </Footer>
    <Button buttonType={Button_Type_Classes.inverted} onClick={addProductToCart} buttonText={"Add to cart"}></Button>
  </ProductCardContainer>

}

export default ProductCard;