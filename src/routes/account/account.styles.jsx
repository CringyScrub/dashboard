import styled from "styled-components";

export const AccountContainer = styled.div`
  width: 85vw;
  height: 90vh;
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const TextContainer = styled.div`
  width: 60%;
`;

export const Name = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 55px;
  width: 300px;
`;

export const PaddedDiv = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Job = styled(PaddedDiv)``;
export const Description = styled(PaddedDiv)``;
export const Phone = styled(PaddedDiv)``;
export const Linked = styled(PaddedDiv)``;
export const Email = styled(PaddedDiv)`
  padding-top: 0;
`;
