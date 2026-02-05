import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { TimelineEvent } from "../HistoricalDates/types";
import "swiper/css";
import "swiper/css/pagination";
import "./MobileSlider.scss";

interface MobileSliderProps {
  events: TimelineEvent[];
}

const MobileSlider: React.FC<MobileSliderProps> = ({ events }) => {
  return (
    <div className="mobile-slider">
      <Swiper
        modules={[Pagination]}
        spaceBetween={25}
        slidesPerView={1.5}
        centeredSlides={false}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="mobile-slider__item">
              <div className="mobile-slider__year">{event.year}</div>
              <div className="mobile-slider__description">
                {event.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileSlider;
