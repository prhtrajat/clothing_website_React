import { useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/Firebase/Firebase.utils.js";

export const ProductContext = createContext({
  products: [],
});

export const ProductsProvider  = ({children}) => {

  const [products, setProducts] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
       const categoryMap = await getCategoriesAndDocuments();
       setProducts(categoryMap);
    }
    getCategoriesMap();
  }, [])
 
  const value = {products};
  return(
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}