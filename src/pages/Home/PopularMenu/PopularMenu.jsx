import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [popularMenu, setPopularMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setPopularMenu(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="Check it out"
        heading="From Our menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 my-8">
        {popularMenu
          .filter((x) => x.category === "popular")
          .map((x) => (
            <MenuItem key={x._id} popular={x}></MenuItem>
          ))}
      </div>
    </div>
  );
};

export default PopularMenu;
