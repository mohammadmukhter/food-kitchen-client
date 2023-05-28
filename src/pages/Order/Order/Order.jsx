import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderSectionImg from "../../../assets/shop/banner2.jpg";
import useMenuFetch from "../../../hooks/useMenuFetch.js";
import CoverImg from "../../Shared/CoverImg/CoverImg";
import FoodMenuCard from "../../Shared/FoodMenuCard/FoodMenuCard";
import "../OrderCSS/OrderCSS.css";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const menuData = useMenuFetch();
  const drinksMenu = menuData.filter((data) => data.category === "drinks");
  const dessertMenu = menuData.filter((data) => data.category === "dessert");
  const pizzaMenu = menuData.filter((data) => data.category === "pizza");
  const saladMenu = menuData.filter((data) => data.category === "salad");
  const soupMenu = menuData.filter((data) => data.category === "soup");

  return (
    <div>
      <CoverImg img={orderSectionImg} coverTitle="Order Here">
        {" "}
        Would you like to try a dish?
      </CoverImg>

      <div className="text-center mx-4 md:mx-28">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <div className="tabs-boxed bg-transparent space-x-4">
              <Tab className="tab tab-bordered">Salads</Tab>
              <Tab className="tab tab-bordered">Pizza</Tab>
              <Tab className="tab tab-bordered">Soups</Tab>
              <Tab className="tab tab-bordered">Desserts</Tab>
              <Tab className="tab tab-bordered">Drinks</Tab>
            </div>
          </TabList>

          <div>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6 my-8 mx-auto">
                {saladMenu.map((data) => (
                  <FoodMenuCard key={data._id} item={data}></FoodMenuCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 mx-auto">
                {pizzaMenu.map((data) => (
                  <FoodMenuCard key={data._id} item={data}></FoodMenuCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 mx-auto">
                {soupMenu.map((data) => (
                  <FoodMenuCard key={data._id} item={data}></FoodMenuCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 mx-auto">
                {dessertMenu.map((data) => (
                  <FoodMenuCard key={data._id} item={data}></FoodMenuCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 mx-auto">
                {drinksMenu.map((data) => (
                  <FoodMenuCard key={data._id} item={data}></FoodMenuCard>
                ))}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
