import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { TimePeriod } from "../HistoricalDates/types";
import "./Circle.scss";

interface CircleProps {
  periods: TimePeriod[];
  activeIndex: number;
  onPeriodChange: (index: number) => void;
}

const Circle: React.FC<CircleProps> = ({
  periods,
  activeIndex,
  onPeriodChange,
}) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [radius, setRadius] = useState(265);
  const totalPoints = periods.length;

  const changeRadius = () => {
    if (window.innerWidth < 1024) {
      return 200;
    } else {
      return 265;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setRadius(changeRadius());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (circleRef.current) {
      const angleStep = 360 / totalPoints;
      const targetRotation = -activeIndex * angleStep;

      setIsAnimating(true);

      gsap.to(circleRef.current, {
        rotation: targetRotation,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          setIsAnimating(false);
        },
      });

      pointsRef.current.forEach((point) => {
        if (point) {
          gsap.to(point, {
            rotation: -targetRotation,
            duration: 0.8,
            ease: "power2.inOut",
          });
        }
      });
    }
  }, [activeIndex, totalPoints]);

  const getPointPosition = (index: number) => {
    const angleStep = (2 * Math.PI) / totalPoints;
    const angle = angleStep * index - Math.PI / 3;

    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  const setPointRef = (index: number) => (el: HTMLButtonElement | null) => {
    pointsRef.current[index] = el;
  };

  return (
    <div className="circle">
      <div
        className={`circle__wrapper ${isAnimating ? "circle__wrapper--animating" : ""}`}
        ref={circleRef}
      >
        <div className="circle__border"></div>
        {periods.map((period, index) => {
          const position = getPointPosition(index);
          const isActive = index === activeIndex;

          return (
            <button
              key={period.id}
              ref={setPointRef(index)}
              className={`circle__point ${isActive ? "circle__point--active" : ""}`}
              style={{
                left: `calc(50% + ${position.x}px)`,
                top: `calc(50% + ${position.y}px)`,
              }}
              onClick={() => onPeriodChange(index)}
              aria-label={`${period.category}`}
            >
              <span className="circle__point-number">{index + 1}</span>
              <span className="circle__point-label">{period.category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Circle;
