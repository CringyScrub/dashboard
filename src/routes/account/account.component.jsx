import {
  AccountContainer,
  Container,
  LeftContainer,
  Name,
  RightContainer,
  TextContainer,
  Job,
  Description,
  Linked,
  Phone,
  Email,
} from "./account.styles";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const Account = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <AccountContainer>
      <Container>
        <LeftContainer>
          {currentUser ? (
            <img src={currentUser.imageUrl} alt="profile" />
          ) : (
            <img
              src="https://via.placeholder.com/200x200/404040/FFFFFF"
              alt="example"
            />
          )}
        </LeftContainer>
        <RightContainer>
          {currentUser ? (
            <TextContainer>
              <Name>{currentUser.name}</Name>
              <Email>{currentUser.email}</Email>
              <Job>{currentUser.jobs}</Job>
              <Description>{currentUser.description}</Description>
              <Phone>{currentUser.phone}</Phone>
              <Linked>{currentUser.username}</Linked>
            </TextContainer>
          ) : (
            <TextContainer>
              <Name>Name Example</Name>
              <Email>example@app.com</Email>
              <Job>Jobs</Job>
              <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                consectetur eligendi deleniti perferendis autem explicabo
                delectus. Pariatur, maiores! Illum nihil deleniti odio? Fugit at
                dicta odit animi doloremque ex atque.
              </Description>
              <Phone>000-000-000</Phone>
              <Linked>user.name</Linked>
            </TextContainer>
          )}
        </RightContainer>
      </Container>
    </AccountContainer>
  );
};

export default Account;
