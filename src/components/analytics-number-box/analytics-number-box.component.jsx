import { Container, Title, Amount } from "./analytics-number-box.styles";

const AnalyticNumberBox = (title, amount) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>$ {amount}</Amount>
    </Container>
  );
};

export default AnalyticNumberBox;
