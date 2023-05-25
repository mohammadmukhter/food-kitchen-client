import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { FaQuoteLeft } from "react-icons/fa";

const ClientFeedBack = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="What Our Clients Says"
        heading="Testimonials"
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />

                <div className="text-center text-7xl my-6">
                  <FaQuoteLeft></FaQuoteLeft>
                </div>
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientFeedBack;

// import { Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// // Import Swiper styles
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
// import { useEffect, useState } from "react";
// import "swiper/css";
// import "swiper/css/navigation";

// const ClientFeedBack = () => {
// const [reviews, setReviews] = useState([]);

// useEffect(() => {
//   fetch("reviews.json")
//     .then((res) => res.json())
//     .then((data) => setReviews(data));
// }, []);

//   return (
//     <section className="my-20">
//       <SectionTitle
//         subHeading="What Our Client Say"
//         heading={"Testimonials"}
//       ></SectionTitle>

// <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//   {reviews.map((review) => (
//     <SwiperSlide key={review._id}>
//       <div className="flex flex-col items-center mx-24 my-16">
//         <Rating
//           style={{ maxWidth: 180 }}
//           value={review.rating}
//           readOnly
//         />
//         <p className="py-8">{review.details}</p>
//         <h3 className="text-2xl text-orange-400">{review.name}</h3>
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>
//     </section>
//   );
// };

// export default ClientFeedBack;
