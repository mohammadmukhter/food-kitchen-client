import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import AddMenu from "../pages/Dashboard/AddMenu/AddMenu";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import FoodMenu from "../pages/FoodMenu/FoodMenu";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Order from "../pages/Order/Order/Order";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Order></Order>
          </PrivateRoute>
        ),
      },
      {
        path: "order/:category",
        element: (
          <PrivateRoute>
            <Order></Order>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddMenu></AddMenu>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: <ManageItem></ManageItem>,
      },
    ],
  },
]);

export default routes;
