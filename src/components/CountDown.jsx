import React, { useState, useEffect } from "react";

const Countdown = ({ datetime }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(datetime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(datetime));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [datetime]);

  function getTimeRemaining(targetDate) {
    const total = Date.parse(targetDate) - Date.now();

    if (total <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="flex items-center gap-4 p-4 text-2xl text-gray-700 bg-white shadow-md quicksand-light rounded-xl justify-evenly">
      <span className="flex flex-col items-center justify-center gap-2 text-center md:flex-row">
        {timeLeft.days} <span className="text-sm font-normal">days</span>
      </span>
      <span className="flex flex-col items-center justify-center gap-2 text-center md:flex-row">
        {timeLeft.hours} <span className="text-sm font-normal">hours</span>
      </span>
      <span className="flex flex-col items-center justify-center gap-2 text-center md:flex-row">
        {timeLeft.minutes} <span className="text-sm font-normal">minutes</span>
      </span>
      <span className="flex flex-col items-center justify-center gap-2 text-center md:flex-row">
        {timeLeft.seconds} <span className="text-sm font-normal">seconds</span>
      </span>
    </div>
  );
};

export default Countdown;
