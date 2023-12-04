import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Orders from "./routes/orders/orders.component";
import Settings from "./routes/settings/settings.component";
import Account from "./routes/account/account.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="orders/" element={<Orders />} />
        <Route path="account/" element={<Account />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
