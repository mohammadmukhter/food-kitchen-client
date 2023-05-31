import React from "react";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaEnvelopeOpen,
  FaHamburger,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import CartTable from "../pages/Dashboard/CartTable/CartTable";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <div className="w-full px-8">
            <div className="flex justify-evenly h-16 items-center uppercase font-semibold">
              <h2>Total order: 20</h2>
              <h2>Total Price: $120</h2>
              <button className="btn-sm bg-[#D1A054] rounded text-white">
                pay
              </button>
            </div>
            <CartTable></CartTable>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li>
              <Link to="/dashboard">
                <FaHome></FaHome>User Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reservation">
                <FaCalendarAlt></FaCalendarAlt>Reservation
              </Link>
            </li>
            <li>
              <Link to="/dashboard/paymentHistory">
                <FaWallet></FaWallet>Payment History
              </Link>
            </li>
            <li>
              <Link to="/dashboard/myCart">
                <FaShoppingCart></FaShoppingCart>My Cart
              </Link>
            </li>
            <li>
              <Link to="/dashboard/myBooking">
                <FaCalendarCheck></FaCalendarCheck>My Booking
              </Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/">
                <FaHome></FaHome>Home
              </Link>
            </li>
            <li>
              <Link to="/foodMenu">
                <FaHamburger></FaHamburger>Menu
              </Link>
            </li>
            <li>
              <Link to="/order">
                <FaShoppingBag></FaShoppingBag>Shop
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaEnvelopeOpen></FaEnvelopeOpen>Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
