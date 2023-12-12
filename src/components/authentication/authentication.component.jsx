import { useContext, useState } from "react";
import {
  AuthenticationContainer,
  Container,
  Header,
  SignContainer,
} from "./authentication.styles";
import { UserContext } from "../../context/user.context";
import { USERS } from "../../users";

const defaultFormValues = {
  name: "",
  email: "",
  password: "",
};

const Authentication = () => {
  const { setCurrentUser, setIsLoggedIn, currentUser, isLoggedIn } =
    useContext(UserContext);

  const [form, setForm] = useState(defaultFormValues);
  const { email, password } = form;

  const resetForm = () => {
    setForm(defaultFormValues);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const logIn = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    resetForm();
  };

  const logInValider = (e) => {
    e.preventDefault();
    USERS.map((user) => {
      if (user.email === email && user.password === password) {
        logIn(user);
        console.log(currentUser, isLoggedIn);
        return user;
      }
      return alert(`wrong email or password`);
    });
  };

  return (
    <Container>
      <AuthenticationContainer onSubmit={logInValider}>
        <Header>Sign In</Header>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <div>
          Forgot password? <a href="/auth">Click Here</a>
        </div>
        <SignContainer>
          <button type="submit">Login</button>
        </SignContainer>
      </AuthenticationContainer>
    </Container>
  );
};

export default Authentication;
