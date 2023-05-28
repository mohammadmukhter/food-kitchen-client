import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import FoodMenu from "../pages/FoodMenu/FoodMenu";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/Order/Order/Order";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "foodMenu",
        element: <FoodMenu></FoodMenu>,
      },
      {
        path: "order",
        element: <Order></Order>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
    ],
  },
]);

export default routes;
