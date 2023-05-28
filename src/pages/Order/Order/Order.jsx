import orderSectionImg from "../../../assets/shop/banner2.jpg";
import CoverImg from "../../Shared/CoverImg/CoverImg";
const Order = () => {
  return (
    <div>
      <CoverImg img={orderSectionImg} coverTitle="Order Here">
        {" "}
        Would you like to try a dish?
      </CoverImg>
      <h1>this is order page</h1>
    </div>
  );
};

export default Order;
