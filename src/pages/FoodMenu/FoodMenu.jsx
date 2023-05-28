import menuSectionCoverImg from "../../../src/assets/menu/banner3.jpg";
import CoverImg from "../Shared/CoverImg/CoverImg";

const FoodMenu = () => {
  return (
    <div>
      <CoverImg img={menuSectionCoverImg} coverTitle="our menu"></CoverImg>
      <h2>Food Menu page</h2>
    </div>
  );
};

export default FoodMenu;
