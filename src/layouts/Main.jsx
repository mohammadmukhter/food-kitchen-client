import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();

  const isHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div className="max-w-7xl mx-auto">
      {isHeaderFooter || <NavBar></NavBar>}

      <Outlet></Outlet>

      {isHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
