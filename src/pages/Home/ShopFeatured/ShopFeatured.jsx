import fImage from "../../../assets/home/chef-service.jpg";

const ShopFeatured = () => {
  return (
    <div
      className="bg-fixed  bg-contain py-16 my-20"
      style={{ backgroundImage: `url(${fImage})` }}
    >
      <div className="px-20 py-16 border-1 border w-8/12 mx-auto space-y-2 bg-white">
        <h2 className="text-center text-3xl">Food Kitchen</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minus,
          iusto consequuntur delectus quis dignissimos, saepe aperiam at ad,
          cupiditate quam sint? Magni, adipisci accusamus nulla soluta delectus
          iure sunt.
        </p>
      </div>
    </div>
  );
};

export default ShopFeatured;
