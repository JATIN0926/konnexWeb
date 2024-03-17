import React from "react";
const CardSection = ({ setDevice }) => {
  return (
    <div className="min-h-screen w-[60%] flex gap-6 sm:gap-4  md:flex-row flex-wrap items-center   ">
      <div
        onClick={() => setDevice("fan")}
        className=" bg-[#12140073] w-[100%] h-[12rem] md:w-[calc(50%-1rem)] sm:h-[16rem] md:mb-6 p-6 flex flex-col items-start justify-start gap-3 font-semibold border-2 border-[#DCDCE7] hover:scale-105 transition-transform rounded-2xl cursor-pointer"
      >
        <h2 className="text-white text-3xl  sm:text-4xl lg:text-5xl">Fan</h2>
        <p className="text-[#f1f1f1] text-base sm:text-lg lg:text-xl">
          Control the speed of the fan
        </p>
        <img src="./images/fan.png" alt="fan" className="h-10 sm:h-20" />
      </div>
      <div
        onClick={() => setDevice("bulb")}
        className="bg-[#12140073] w-[100%] h-[12rem] md:w-[calc(50%-1rem)] sm:h-[16rem] md:mb-6 p-6 flex flex-col items-start justify-start gap-3 font-semibold border-2 border-[#DCDCE7] hover:scale-105 transition-transform rounded-2xl cursor-pointer"
      >
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl">Bulb</h2>
        <p className="text-[#f1f1f1] text-base sm:text-lg lg:text-xl">
          Turn on or off the bulb
        </p>
        <img
          src="./images/light-bulb (1).png"
          alt="fan"
          className="h-10 sm:h-20"
        />
      </div>

      <div
        onClick={() => setDevice("led")}
        className="bg-[#12140073] w-[100%] h-[12rem] md:w-[calc(50%-1rem)] sm:h-[16rem] md:mb-6 p-6 flex flex-col items-start justify-start gap-3 font-semibold border-2 border-[#DCDCE7] hover:scale-105 transition-transform rounded-2xl cursor-pointer"
      >
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl">Led</h2>
        <p className="text-[#f1f1f1] text-base sm:text-lg lg:text-xl">
          Control the color of the led
        </p>
        <img src="./images/led.png" alt="fan" className="h-10 sm:h-20" />
      </div>
      <div
        onClick={() => setDevice("ac")}
        className="bg-[#12140073] w-[100%] h-[12rem] md:w-[calc(50%-1rem)]  sm:h-[16rem] md:mb-6 p-6 flex flex-col items-start justify-start gap-3 font-semibold border-2 border-[#DCDCE7] hover:scale-105 transition-transform rounded-2xl cursor-pointer"
      >
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl">AC</h2>
        <p className="text-[#f1f1f1] text-base sm:text-lg lg:text-xl">
          Control state & temp of Ac
        </p>
        <img
          src="./images/air-conditioner (2).png"
          alt="fan"
          className="h-10 sm:h-28"
        />
      </div>
    </div>
  );
};

export default CardSection;
