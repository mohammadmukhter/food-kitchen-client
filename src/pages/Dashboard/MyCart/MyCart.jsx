import React from "react";
import CartTable from "../CartTable/CartTable";

const MyCart = () => {
  return (
    <div className="w-full px-8">
      <div className="flex justify-evenly h-16 items-center uppercase font-semibold">
        <h2>Total order: 20</h2>
        <h2>Total Price: $120</h2>
        <button className="btn-sm bg-[#D1A054] rounded text-white">pay</button>
      </div>
      <CartTable></CartTable>
    </div>
  );
};

export default MyCart;
