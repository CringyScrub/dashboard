import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  box-shadow: 2px 2px 10px 0 black;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 10px 10px 10px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  img {
    width: 100%;
  }
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50px;
  background: #d7d2cc; /* fallback for old browsers */
`;
export const Title = styled.div`
  font-size: larger;
  font-weight: 500;
`;
export const Price = styled.div`
  font-size: small;
  font-weight: 500;
`;
