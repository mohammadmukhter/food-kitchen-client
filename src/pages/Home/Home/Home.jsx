import Banner from "../Banner/Banner";
import OrderOnlineSection from "../OrderOnlineSection/OrderOnlineSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-12 md:mx-28">
        <OrderOnlineSection></OrderOnlineSection>
      </div>
      <h2>This is Home page</h2>
    </div>
  );
};

export default Home;
