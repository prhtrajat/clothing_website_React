import SignUpForm from "../../sign-up-form/Sign-up-form.component";
import SignInForm from "../../sign-in-form/Sign-in-form.component";
import {AuthenticationContainer} from './Authentication.styles';

const Authentication = () => {

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication;