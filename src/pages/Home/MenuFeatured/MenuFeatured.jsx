import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MenuFeatured = () => {
  return (
    <div
      className="bg-fixed bg-fit  my-20 bg-no-repeat text-white bg-blend-darken"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <div className=" bg-black/60 pt-12 pb-20">
        <SectionTitle
          subHeading="Check it out"
          heading="Featured Menu"
        ></SectionTitle>
        <div className="flex gap-8 mx-36 mt-8">
          <img className="w-[400px]" src={featuredImg} alt="" />
          <div>
            <p> March 20, 2023</p>
            <h2>WHERE CAN I GET SOME?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn outline-1">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuFeatured;
