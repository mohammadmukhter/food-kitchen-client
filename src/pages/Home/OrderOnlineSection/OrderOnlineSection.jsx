import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const OrderOnlineSection = () => {
  return (
    <section className="my-12">
      <SectionTitle
        subHeading="From 11:00 am to 10:00 pm"
        heading="order online"
      ></SectionTitle>
      <div className="p-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <p className="-mt-10 text-center text-2xl text-white shadow uppercase">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <p className="-mt-10 text-center text-2xl text-white shadow uppercase">
              Pizza
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <p className="-mt-10 text-center text-2xl text-white shadow uppercase">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <p className="-mt-10 text-center text-2xl text-white shadow uppercase">
              Deserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <p className="-mt-10 text-center text-2xl text-white shadow uppercase">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <p className="-mt-10 text-center text-2xl text-white shadow uppercase">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <p className="-mt-10 text-center text-2xl text-white shadow uppercase">
              Deserts
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OrderOnlineSection;
