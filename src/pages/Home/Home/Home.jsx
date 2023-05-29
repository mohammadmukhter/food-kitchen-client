import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUsSection from "../CallUsSection/CallUsSection";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import ClientFeedBack from "../ClientFeedBack/ClientFeedBack";
import MenuFeatured from "../MenuFeatured/MenuFeatured";
import OrderOnlineSection from "../OrderOnlineSection/OrderOnlineSection";
import PopularMenu from "../PopularMenu/PopularMenu";
import ShopFeatured from "../ShopFeatured/ShopFeatured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Food Kitchen || Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="mx-12 md:mx-28">
        <OrderOnlineSection></OrderOnlineSection>
        <ShopFeatured></ShopFeatured>
        <PopularMenu></PopularMenu>
        <CallUsSection></CallUsSection>
        <ChefRecommend></ChefRecommend>
      </div>
      <MenuFeatured></MenuFeatured>
      <div className="mx-12 md:mx-28">
        <ClientFeedBack></ClientFeedBack>
      </div>
    </div>
  );
};

export default Home;
