import { useContext } from "react";
import {
  AuthenticationContainer,
  Container,
  Header,
  SignContainer,
} from "./authentication.styles";
import { UserContext } from "../../context/user.context";

const Authentication = () => {
  const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn } =
    useContext(UserContext);

  const defaultFormValues = {
    name: "",
    email: "",
    password: "",
  };

  const logIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setCurrentUser({
      name: "Hussein Sobieh",
      email: "husseinsobieh@yahoo.com",
    });
  };

  return (
    <Container>
      <AuthenticationContainer>
        <Header>Sign In</Header>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div>
          Forgot password? <a href="/auth">Click Here</a>
        </div>
        <SignContainer>
          <span>Login</span>
        </SignContainer>
      </AuthenticationContainer>
    </Container>
  );
};

export default Authentication;
