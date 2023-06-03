import React from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaCalendarCheck,
  FaEnvelopeOpen,
  FaHamburger,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaStore,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCartFetch from "../hooks/useCartFetch";
import useIsAdmin from "../hooks/useIsAdmin";

const Dashboard = () => {
  const [cart] = useCartFetch();
  const [isAdmin] = useIsAdmin();

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
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard">
                    <FaHome></FaHome>Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addItems">
                    <FaUtensils></FaUtensils>Add Items
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageItems">
                    <FaStore></FaStore>Manage Items
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageBookings">
                    <FaBook></FaBook>Manage Bookings
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/allUsers">
                    <FaUsers></FaUsers>All Users
                  </Link>
                </li>
              </>
            ) : (
              <>
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
                  <Link
                    to="/dashboard/myCart"
                    className="border border-gray-600"
                  >
                    <FaShoppingCart />
                    My Cart
                    <div className="badge badge-secondary">
                      {cart ? cart.length : 0}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myBooking">
                    <FaCalendarCheck></FaCalendarCheck>My Booking
                  </Link>
                </li>
              </>
            )}
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
