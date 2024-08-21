import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "../ui/Loader";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader></Loader>}
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
