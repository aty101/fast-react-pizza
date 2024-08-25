import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "../ui/Loader";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader></Loader>}
      <Header></Header>
      <div className=" my-10 overflow-scroll md:overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet></Outlet>
        </main>
      </div>
      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
