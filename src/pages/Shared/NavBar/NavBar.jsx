import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOutHandler } = useContext(AuthContext);

  const logOut = () => {
    logOutHandler()
      .then(() => {
        alert("User Deleted Successfully");
      })
      .catch((err) => console.log(err));
  };
  const navMenu = (
    <>
      <li className="hover:bg-gray-600/50">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-gray-600/50">
        <Link to="/foodMenu">Our Menu</Link>
      </li>
      <li className="hover:bg-gray-600/50">
        <Link to="/order">Order</Link>
      </li>
      <li className="hover:bg-gray-600/50">
        <Link to="/dashboard/myCart" className="border border-gray-600">
          <FaShoppingCart />
          <div className="badge badge-secondary">+0</div>
        </Link>
      </li>

      {user ? (
        <>
          <li className="hover:bg-gray-600/50">
            <button onClick={logOut} className="btn btn-outline">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li className="hover:bg-gray-600/50">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:bg-gray-600/50">
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-black/30 text-white fixed z-50 max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-80 text-white rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Food Kitchen
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        <a className="bg-slate-300 px-6 py-2 rounded text-xl font-semibold uppercase text-orange-600 drop-shadow-xl hover:cursor-pointer hover:bg-gray-500 hover:text-white hover:border-b-2 hover:border-orange-600">
          Order Now
        </a>
      </div>
    </div>
  );
};

export default NavBar;
