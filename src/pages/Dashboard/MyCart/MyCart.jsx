import React from "react";
import useCartFetch from "../../../hooks/useCartFetch";
import CartTable from "../CartTable/CartTable";

const MyCart = () => {
  const [cart] = useCartFetch();
  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <div className="w-full px-8">
      <div className="flex justify-evenly h-16 items-center uppercase font-semibold">
        <h2>Total order: {cart.length}</h2>
        <h2>Total Price: $ {totalPrice}</h2>
        <button className="btn-sm bg-[#D1A054] rounded text-white">pay</button>
      </div>
      <CartTable cart={cart}></CartTable>
    </div>
  );
};

export default MyCart;
