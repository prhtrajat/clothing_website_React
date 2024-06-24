import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../Routes/categories-preview/categories-preview.component';
import Category from '../Routes/category/category.component';

const Shop = () => {

  

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>} />
      <Route path=':category' element={<Category/>} />
     </Routes>

  )
}


export default Shop;