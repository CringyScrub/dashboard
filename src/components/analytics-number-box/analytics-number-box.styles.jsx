import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(
    rgba(34, 94, 195, 1) 0%,
    rgba(45, 213, 253, 1) 100%
  );
  color: white;
  border-radius: 15px;
`;

export const Title = styled.div`
  padding: 20px 0 0 20px;
  font-size: 20px;
`;

export const Amount = styled.div`
  font-weight: bold;
  font-size: 40px;
  padding: 0 0 0 20px;
`;
