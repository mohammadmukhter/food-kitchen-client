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
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content items-center justify-center">
          <div>
            <Outlet></Outlet>
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
