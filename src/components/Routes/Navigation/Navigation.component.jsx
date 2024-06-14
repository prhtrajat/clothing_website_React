import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import CartIcon from "../../cart-icon/Cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"
import{NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from './Navigation.styles';
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart-context";
import { signOutUser } from "../../../utils/Firebase/Firebase.utils";

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>

      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/shop'>Contact</NavLink>
          {currentUser ? (<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>) : (
            <NavLink to='/auth'>Sign In</NavLink>)}
           <CartIcon />
        </NavLinksContainer>
         {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />

    </Fragment>
  )
}

export default Navigation;