import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/Firebase/Firebase.utils";
import FormInput from "../form-input/Form-Input.component";
import {SignUpContainer} from './Sign-up-form.styles';
import Button from "../Button/Button.component";


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;


  const resetFormFields = () => (setFormFields(defaultFormFields));

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!(password == confirmPassword)) {
      alert('your password doesn\'t matches');
      return;
    }

    try {

      const { user } = await createAuthUserWithEmailAndPassword(email, password);
     
      console.log(user);
      
      await createUserDocumentFromAuth(user, { displayName });
  
      resetFormFields();

    } catch (error) {
      if (error.code == 'auth/email-already-in-use') {
        alert('already exists');
      }
      else { console.log("error caughted", error.message); }
    }
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign Up With Email and Password</span>

      <form onSubmit={handleSubmit}>

        <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required />

        <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required />

        <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required />

        <FormInput label="Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />

        <Button buttonType= 'inverted' buttonText='Sign Up' type = 'submit'/>

      </form>

    </SignUpContainer>)

}

export default SignUpForm;