import { useState } from "react";
import { SignInWithGooglePopup ,createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/Firebase/Firebase.utils";
import FormInput from "../form-input/Form-Input.component";
import {SignUpContainer, ButtonsContainer} from './Sign-in-form.styles';
import Button, {Button_Type_Classes} from "../Button/Button.component";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const resetFormFields = () => (setFormFields(defaultFormFields));

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    try {

      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      
      

      resetFormFields();

    } catch (error) {
      if(error.code == 'auth/invalid-credential'){
        alert('Wrong Data');
      }else{
        console.log(error.message);
      }
    }
  }

  const signInWithGoogle = async () => {
    await SignInWithGooglePopup();
  } 

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign In With Email and Password</span>

      <form onSubmit={handleSubmit}>

        <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required />

        <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required />

        <ButtonsContainer>
        <Button buttonType= {Button_Type_Classes.inverted} buttonText='Sign In' type = 'submit'/>
        <Button onClick={signInWithGoogle} type='button' buttonType={Button_Type_Classes.google} buttonText='Google Sign In' />
        </ButtonsContainer>

      </form>

    </SignUpContainer>)

}

export default SignInForm;