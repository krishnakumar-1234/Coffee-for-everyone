// components/MySwiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MySwiper() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3} // Show 3 slides at a time by default
      spaceBetween={20} // Space between slides
      autoplay={{
        delay: 3000, // 3000ms = 3 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <img
          src="/CoffeeImages/coffee1.avif"
          alt="Slide 1"
          className="swiper-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/CoffeeImages/coffee2.avif"
          alt="Slide 2"
          className="swiper-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/CoffeeImages/coffee3.avif"
          alt="Slide 3"
          className="swiper-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/CoffeeImages/coffee4.avif"
          alt="Slide 4"
          className="swiper-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/CoffeeImages/coffee5.avif"
          alt="Slide 5"
          className="swiper-image"
        />
      </SwiperSlide>
    </Swiper>
  );
}
