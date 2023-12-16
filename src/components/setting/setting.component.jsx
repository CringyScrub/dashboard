import React from "react";
import { Container, Title } from "./setting.styles";

const Setting = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <input type="checkbox" />
    </Container>
  );
};

export default Setting;
