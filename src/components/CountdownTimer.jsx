import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const eventDate = new Date("2022-12-30");
      const currentTime = date.getTime();
      const eventTime = eventDate.getTime();
      const remainingTime = eventTime - currentTime;

      setDays(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((remainingTime % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[110vh]">
        <div class="mx-60 my-32 bg-[#B41FB4] rounded-xl justify-center flex flex-col">
      <div className=" p-4 text-center space-x-20 justify-center  flex ">
        <div class="text-6xl text-[#dc3545]">
          {days} <br /> <span className="text-xl">days</span>
        </div>
        <div class="text-6xl text-[#FFC107]">
          {hours} <br /> <span className="text-xl">hours</span>
        </div>
        <div class="text-6xl text-[#007BFF]">
          {minutes} <br /> <span className="text-xl">minutes</span>
        </div>
        <div class="text-6xl text-[#28A745]">
          {seconds} <br /> <span className="text-xl">seconds</span>
        </div>
        
      </div>
      <div className="text-6xl font-Rubik texy-bold text-white mt-11 text-center">
      <h2>16 TH ANNUAL GALA EVENT</h2>
      <p class='text-2xl mt-11'>25 SEPTEMBER, 2023 IN NEW YORK</p>
      </div>
      <div>
    
      </div>
    </div>
    </div>
    
  );
}

export default CountdownTimer;
