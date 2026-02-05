import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { TimelineEvent } from "../HistoricalDates/types";
import "swiper/css";
import "swiper/css/navigation";
import "./EventsSlider.scss";

interface EventsSliderProps {
  events: TimelineEvent[];
}

const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="events-slider">
      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}

        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: SwiperType) => {
          if (typeof swiper.params.navigation !== "boolean") {
            const navigation = swiper.params.navigation;
            if (navigation) {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="events-slider__item">
              <div className="events-slider__year">{event.year}</div>
              <div className="events-slider__description">
                {event.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        className="events-slider__nav events-slider__nav--prev"
        aria-label="Предыдущее событие"
      >
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
          <path
            d="M8.49988 0.999908L2.49988 6.99991L8.49988 12.9999"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
      <button
        ref={nextRef}
        className="events-slider__nav events-slider__nav--next"
        aria-label="Следующее событие"
      >
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
          <path
            d="M1.50012 0.999908L7.50012 6.99991L1.50012 12.9999"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
};

export default EventsSlider;
