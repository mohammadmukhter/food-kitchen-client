import cardImg1 from "../../../assets/home/slide1.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecommend = () => {
  return (
    <div className="my-20">
      <SectionTitle
        subHeading="Should Try"
        heading="Chef recommends"
      ></SectionTitle>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 items-">
        <div className="card card-compact w-72 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img className="w-full h-52 object-cover" src={cardImg1} alt="" />
          </figure>
          <div className="card-body bg-[#F3F3F3]">
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="">
                <button className="btn btn-outline">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-compact w-72 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img className="w-full h-52 object-cover" src={cardImg1} alt="" />
          </figure>
          <div className="card-body bg-[#F3F3F3]">
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="">
                <button className="btn btn-outline">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-compact w-72 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img className="w-full h-52 object-cover" src={cardImg1} alt="" />
          </figure>
          <div className="card-body bg-[#F3F3F3]">
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="">
                <button className="btn btn-outline">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommend;
