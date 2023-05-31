import React from "react";

const CartTable = ({ cartItems }) => {
  console.log(cartItems);
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
          {/* row 1 */}
          <tr>
            <td>1</td>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="" />
                </div>
              </div>
            </td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>Purple</td>
            <td>
              <button className="btn btn-ghost btn-xs">details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
