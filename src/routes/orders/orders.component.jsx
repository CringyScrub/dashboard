import { Container, OrdersContainer } from "./orders.styles";
import Order from "../../components/order/order.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const Orders = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <OrdersContainer>
        <Container>
          {currentUser ? (
            <>
              {currentUser.orders.map((order) => {
                const { imageUrl, title, price } = order;
                return (
                  <Order title={title} price={price} imageUrl={imageUrl} />
                );
              })}
            </>
          ) : (
            <Order
              title="Example"
              price="Example"
              imageUrl="https://via.placeholder.com/200x200/404040/FFFFFF"
            />
          )}
        </Container>
      </OrdersContainer>
    </>
  );
};

export default Orders;
