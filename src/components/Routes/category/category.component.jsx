import { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../../contexts/products.context';
import { useParams } from 'react-router-dom';

import {CategoryContainer, CategoryTitle} from './category.styles';
import ProductCard from '../../product-card/ProductCard.component';

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const [currProducts, setCurrProducts] = useState(products[category]);

  useEffect(() => {
    setCurrProducts(products[category]);
  }, [category, products])

  return (
    <>
      <CategoryTitle >
        {category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>

        {
          currProducts && currProducts.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </CategoryContainer>
    </>
  )
};

export default Category;