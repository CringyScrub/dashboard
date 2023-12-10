import AnalyticNumberBox from "../../components/analytics-number-box/analytics-number-box.component";
import { Container } from "./home.styles";

const Home = () => {
  return (
    <Container>
      <AnalyticNumberBox title={"Total Income"} amount={"200,000"} />
      <AnalyticNumberBox title={"Total Paid"} amount={"98,000"} />
      <AnalyticNumberBox title={"Total Investments"} amount={"40,000"} />
    </Container>
  );
};

export default Home;
