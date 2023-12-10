import styled from "styled-components";

const mainColor = "#eee";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 15px;
  height: auto;
  width: 30vw;
  padding: 20px;
  box-shadow: 5px 5px 20px #888888;
  background-color: white;
`;

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  input {
    border-radius: 5px;
    background-color: ${mainColor};
    border: none;
    padding-left: 10px;
    height: 30px;
    display: block;
    &:focus {
      outline: none;
      box-shadow: 0 0 5px grey;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  font-size: 36px;
  font-weight: bold;
  margin: auto;
`;

export const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: 10px auto;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${mainColor};
    border-radius: 15px;
    width: 120px;
    height: 30px;
    color: #444444;
    cursor: pointer;
  }
`;
