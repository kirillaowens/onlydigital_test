import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Circle from "../Circle/Circle";
import EventsSlider from "../EventsSlider/EventsSlider";
import MobileSlider from "../MobileSlider/MobileSlider";
import { HistoricalDatesProps } from "./types";
import "./HistoricalDates.scss";

const HistoricalDates: React.FC<HistoricalDatesProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [displayedYears, setDisplayedYears] = useState({
    start: data[0].startYear,
    end: data[0].endYear,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const startYearRef = useRef<HTMLDivElement>(null);
  const endYearRef = useRef<HTMLDivElement>(null);
  const tweensRef = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const newPeriod = data[activeIndex];

    tweensRef.current.forEach((tween) => tween.kill());
    tweensRef.current = [];

    if (startYearRef.current && endYearRef.current) {
      const startYearObj = { value: displayedYears.start };
      const endYearObj = { value: displayedYears.end };

      const startTween = gsap.to(startYearObj, {
        value: newPeriod.startYear,
        duration: 0.6,
        ease: "power2.out",
        onUpdate: () => {
          if (startYearRef.current) {
            startYearRef.current.textContent = Math.round(
              startYearObj.value,
            ).toString();
          }
        },
        onComplete: () => {
          setDisplayedYears((prev) => ({
            ...prev,
            start: newPeriod.startYear,
          }));
        },
      });

      const endTween = gsap.to(endYearObj, {
        value: newPeriod.endYear,
        duration: 0.6,
        ease: "power2.out",
        onUpdate: () => {
          if (endYearRef.current) {
            endYearRef.current.textContent = Math.round(
              endYearObj.value,
            ).toString();
          }
        },
        onComplete: () => {
          setDisplayedYears((prev) => ({
            ...prev,
            end: newPeriod.endYear,
          }));
        },
      });

      tweensRef.current.push(startTween, endTween);
    }

    return () => {
      tweensRef.current.forEach((tween) => tween.kill());
    };
  }, [activeIndex, data, displayedYears.end, displayedYears.start]);

  const handlePeriodChange = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="historical-dates">
      <div className="historical-dates__header">
        <div className="historical-dates__border"></div>
        <h2 className="historical-dates__title">
          Исторические
          <br />
          даты
        </h2>
      </div>

      <div className="historical-dates__content">
        <div className="historical-dates__years">
          <div
            ref={startYearRef}
            className="historical-dates__year historical-dates__year--start"
          >
            {displayedYears.start}
          </div>
          <div
            ref={endYearRef}
            className="historical-dates__year historical-dates__year--end"
          >
            {displayedYears.end}
          </div>
        </div>

        <Circle
          periods={data}
          activeIndex={activeIndex}
          onPeriodChange={handlePeriodChange}
        />

        <div className="historical-dates__navigation">
          <div className="historical-dates__counter">
            <span className="historical-dates__counter-current">
              0{activeIndex + 1}
            </span>
            <span className="historical-dates__counter-separator">/</span>
            <span className="historical-dates__counter-total">
              0{data.length}
            </span>
          </div>
          <div className="historical-dates__navigation-btns">
            <button
              className="historical-dates__nav-btn historical-dates__nav-btn--prev"
              onClick={handlePrevious}
              disabled={activeIndex === 0}
              aria-label="Предыдущий период"
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
              className="historical-dates__nav-btn historical-dates__nav-btn--next"
              onClick={handleNext}
              disabled={activeIndex === data.length - 1}
              aria-label="Следующий период"
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
        </div>
      </div>
      {isMobile ? (
        <MobileSlider events={data[activeIndex].events} key={activeIndex} />
      ) : (
        <EventsSlider events={data[activeIndex].events} key={activeIndex} />
      )}
    </div>
  );
};

export default HistoricalDates;
