import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartTable = ({ cart }) => {
  const orderCartItemDeleteHandler = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          alert("data deleted successfully");
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={() => orderCartItemDeleteHandler(item._id)}
                  className="btn btn-ghost btn-xs bg-red-600 text-white"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
