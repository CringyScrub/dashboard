import { Outlet } from "react-router-dom";
import AnalyticNumberBox from "../../components/analytics-number-box/analytics-number-box.component";
import { Container } from "./home.styles";

const Home = () => {
  return (
    <>
      <Outlet />
      <Container>
        <AnalyticNumberBox title={"Total Income"} amount={"200"} />
        <AnalyticNumberBox title={"Total Income"} amount={"200"} />
        <AnalyticNumberBox title={"Total Income"} amount={"200"} />
      </Container>
    </>
  );
};

export default Home;
