import AnalyticNumberBox from "../../components/analytics-number-box/analytics-number-box.component";
import { Container } from "./home.styles";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const Home = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      {currentUser ? (
        <>
          <AnalyticNumberBox
            title={"Wallet"}
            amount={currentUser.totalCashInWallet}
          />
          <AnalyticNumberBox
            title={"Highest Purchase"}
            amount={currentUser.highestCashPaid}
          />
          <AnalyticNumberBox
            title={"Total Paid"}
            amount={currentUser.totalCashPaid}
          />
        </>
      ) : (
        <>
          <AnalyticNumberBox title={"Example"} amount={"100"} />
        </>
      )}
    </Container>
  );
};

export default Home;
