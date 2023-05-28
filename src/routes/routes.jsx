import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import FoodMenu from "../pages/FoodMenu/FoodMenu";
import Home from "../pages/Home/Home/Home";

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
    ],
  },
]);

export default routes;
