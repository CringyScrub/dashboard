import React from "react";
import {
  Container,
  Description,
  ImageContainer,
  Price,
  Title,
} from "./order.styles";

export const Order = ({ imageUrl, title, price }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt="order" />
      </ImageContainer>
      <Description>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </Description>
    </Container>
  );
};

export default Order;
