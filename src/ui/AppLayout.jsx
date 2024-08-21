import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
function AppLayout() {
  return (
    <div>
      <Header></Header>
      <main>
        <h1>Content</h1>
        <Outlet></Outlet>
        <CartOverview></CartOverview>
      </main>
    </div>
  );
}

export default AppLayout;
