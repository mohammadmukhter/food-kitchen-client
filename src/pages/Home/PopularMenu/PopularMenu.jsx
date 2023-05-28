import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenuFetch from "../../../hooks/useMenuFetch";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const data = useMenuFetch();
  const popularItems = data.filter((x) => x.category === "popular");
  return (
    <div>
      <SectionTitle
        subHeading="Check it out"
        heading="From Our menu"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        {popularItems.map((x) => (
          <MenuItem key={x._id} item={x}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
