import { child } from 'firebase/database';
import{ BaseButton, GoogleSignInButton, InvertedButton } from './Button.styles';


export const Button_Type_Classes = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const getButton = (buttonType = Button_Type_Classes.base) => ({
  [Button_Type_Classes.base]: BaseButton,
  [Button_Type_Classes.google]: GoogleSignInButton,
  [Button_Type_Classes.inverted]: InvertedButton,
}[buttonType]);

const Button = ({buttonText, buttonType, ...otherProps }) => {

    const CustomButton = getButton(buttonType);
    return(
      <CustomButton {...otherProps}>
      {buttonText}
    </CustomButton>
    )
 

 }

 export default Button;