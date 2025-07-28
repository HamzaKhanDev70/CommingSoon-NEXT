"use client";

import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-08-22T00:00:00"); 
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    const timeLeft = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderDigits = (value: number) => {
    return String(value).padStart(2, "0").split("").map((digit, idx) => (
      <span
        key={idx}
        className="bg-[#301400] text-white text-4xl md:text-5xl font-extrabold w-10 h-14 md:w-14 md:h-16 flex items-center justify-center mx-[2px] rounded-sm"
      >
        {digit}
      </span>
    ));
  };

  return (
    <div className="flex space-x-4 text-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex ">{renderDigits(timeLeft.days)}</div>
        <span className="text-white text-lg mt-2 tracking-widest">DAYS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">{renderDigits(timeLeft.hours)}</div>
        <span className="text-white text-lg mt-2 tracking-widest">HOURS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">{renderDigits(timeLeft.minutes)}</div>
        <span className="text-white text-lg mt-2 tracking-widest">MINUTES</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
