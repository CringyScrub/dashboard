import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthenticationContainer,
  Container,
  Header,
  SignContainer,
} from "./authentication.styles";
import { UserContext } from "../../context/user.context";
import Users from "../../users.json";

const defaultFormValues = {
  name: "",
  email: "",
  password: "",
};

const Authentication = () => {
  const { setCurrentUser, currentUser } = useContext(UserContext);

  const [form, setForm] = useState(defaultFormValues);
  const { email, password } = form;
  const navigate = useNavigate();

  const resetForm = () => {
    setForm(defaultFormValues);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const logIn = (user) => {
    setCurrentUser(user);
    resetForm();
  };

  const logInValider = (e) => {
    e.preventDefault();
    if (currentUser) {
      return;
    }

    const foundUser = Users.users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      logIn(foundUser);
      navigate(`/`);
    } else {
      console.log(`Wrong email or password`);
    }
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
