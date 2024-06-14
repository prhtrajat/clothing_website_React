
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Routes/Navigation/Navigation.component';
import Home from './components/Routes/Home/Home.component';
import Authentication from './components/Routes/authentication/Authentication.component';
import Shop from './components/Shop/Shop.component';
import CheckOut from './components/Routes/checkout/checkout.component';

const App = () => {


  return (

    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<CheckOut />} />
        <Route path='auth' element={<Authentication/>} />
      </Route>
    </Routes>



  );
}

export default App;
