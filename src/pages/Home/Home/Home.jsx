import Banner from "../Banner/Banner";
import CallUsSection from "../CallUsSection/CallUsSection";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import OrderOnlineSection from "../OrderOnlineSection/OrderOnlineSection";
import PopularMenu from "../PopularMenu/PopularMenu";
import ShopFeatured from "../ShopFeatured/ShopFeatured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-12 md:mx-28">
        <OrderOnlineSection></OrderOnlineSection>
        <ShopFeatured></ShopFeatured>
        <PopularMenu></PopularMenu>
        <CallUsSection></CallUsSection>
        <ChefRecommend></ChefRecommend>
      </div>
      <h2>This is Home page</h2>
    </div>
  );
};

export default Home;
