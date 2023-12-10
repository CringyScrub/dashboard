import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 130px;
  width: 85vw;
  padding: 40px;
  box-sizing: border-box;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;
