import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 95%;
  height: 40px;
  background-color: #ddd;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
  align-items: center;
  margin: 15px 0 15px 0;
  border-radius: 5px;
  input {
    width: 20px; /* Size of the custom checkbox */
    height: 20px;
    background-color: #fff; /* Background color when not checked */
  }
`;

export const Title = styled.div`
  font-size: large;
`;
