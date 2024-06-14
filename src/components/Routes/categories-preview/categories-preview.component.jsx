import { useContext } from "react";
import { ProductContext } from "../../../contexts/products.context";
import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {

  const { products } = useContext(ProductContext);

  return (
    <>
      {
        Object.keys(products).map((title) => {
          const product = products[title];
          return <CategoryPreview key={title} title={title} products={product} />

        })
      }
    </>

  )
}


export default CategoriesPreview;