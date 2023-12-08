import { OrdersContainer } from "./orders.styles";
import { Outlet } from "react-router-dom";

const Orders = () => {
  return (
    <>
      <OrdersContainer>
        <div></div>
      </OrdersContainer>
      <Outlet />
    </>
  );
};

export default Orders;
