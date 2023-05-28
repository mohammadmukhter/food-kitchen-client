import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const FoodMenuCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-full md:w-80 mx-auto bg-base-100 shadow-xl relative">
      <p className="absolute top-0 right-0 bg-gray-800 text-white text-xl px-4 py-0 rounded-sm bg-opacity-80">
        $ {price}
      </p>
      <figure>
        <img className="w-full rounded-t-xl" src={image} alt={name} />
      </figure>
      <div className="card-body text-center">
        <h2 className=" text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-800">{recipe}</p>
        <div className="card-actions justify-center my-4">
          <PrimaryButton>Order Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default FoodMenuCard;
