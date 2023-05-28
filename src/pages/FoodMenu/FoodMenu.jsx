import { Link } from "react-router-dom";
import menuSectionCoverImg from "../../../src/assets/menu/banner3.jpg";
import dessertSectionCoverImg from "../../../src/assets/menu/dessert.jpg";
import pizzaSectionCoverImg from "../../../src/assets/menu/pizza-bg.jpg";
import saladSectionCoverImg from "../../../src/assets/menu/salad-bg.jpg";
import soupSectionCoverImg from "../../../src/assets/menu/soup-bg.jpg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenuFetch from "../../hooks/useMenuFetch";
import MenuItem from "../../pages/Shared/MenuItem/MenuItem";
import CoverImg from "../Shared/CoverImg/CoverImg";

const FoodMenu = () => {
  const menuData = useMenuFetch();
  const offeredMenu = menuData.filter((data) => data.category === "offered");
  const dessertMenu = menuData.filter((data) => data.category === "dessert");
  const pizzaMenu = menuData.filter((data) => data.category === "pizza");
  const saladMenu = menuData.filter((data) => data.category === "salad");
  const soupMenu = menuData.filter((data) => data.category === "soup");

  return (
    <div>
      {/* main cover image of menu page */}
      <CoverImg img={menuSectionCoverImg} coverTitle="our menu">
        Would you like to try a dish?
      </CoverImg>

      {/* offered menu section */}
      <div className="mx-4 md:mx-28 mb-12">
        <SectionTitle
          subHeading="Don't miss"
          heading="Today's offer"
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-12">
          {offeredMenu.map((data) => (
            <MenuItem key={data._id} item={data}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <Link to="/order/offered">
            <PrimaryButton>Order Your Favorite Food</PrimaryButton>
          </Link>
        </div>
      </div>

      {/* dessert menu items section */}
      <CoverImg img={dessertSectionCoverImg} coverTitle="DESSERTS">
        Would you like to our dessert items?
      </CoverImg>
      <div className="mx-4 md:mx-28 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-12">
          {dessertMenu.map((data) => (
            <MenuItem key={data._id} item={data}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <Link to="/order/dessert">
            <PrimaryButton>Order Your Favorite Food</PrimaryButton>
          </Link>
        </div>
      </div>

      {/* Pizza menu items section */}
      <CoverImg img={pizzaSectionCoverImg} coverTitle="Pizza">
        Would you like to our Delicious Pizza?
      </CoverImg>
      <div className="mx-4 md:mx-28 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-12">
          {pizzaMenu.map((data) => (
            <MenuItem key={data._id} item={data}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <Link to="/order/pizza">
            <PrimaryButton>Order Your Favorite Food</PrimaryButton>
          </Link>
        </div>
      </div>

      {/* Salads menu items section */}
      <CoverImg img={saladSectionCoverImg} coverTitle="Salad">
        Would you like to our Tasty and unique Salads?
      </CoverImg>
      <div className="mx-4 md:mx-28 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-12">
          {saladMenu.map((data) => (
            <MenuItem key={data._id} item={data}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <Link to="/order/salad">
            <PrimaryButton>Order Your Favorite Food</PrimaryButton>
          </Link>
        </div>
      </div>

      {/* Soup menu items section */}
      <CoverImg img={soupSectionCoverImg} coverTitle="soup">
        Would you like to our Tasty Soups?
      </CoverImg>
      <div className="mx-4 md:mx-28 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-12">
          {soupMenu.map((data) => (
            <MenuItem key={data._id} item={data}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <Link to="/order/soup">
            <PrimaryButton>Order Your Favorite Food</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
