import React, { useState, useEffect } from "react";
import axios from "axios";

const BulbControls = () => {
  const [powerOn, setPowerOn] = useState(0);
  useEffect(() => {
    try {
      axios.get(`/devices/HDQcbGz`).then((response) => {
        const { bulb } = response.data;
        setPowerOn(bulb);
      });
    } catch (error) {
      console.log("Can not get the details", error);
    }
  }, []);

  const togglePower = () => {
    setPowerOn((prevPower) => (prevPower ? 0 : 1));
    try {
      axios
        .post("/devices", {
          teamid: "HDQcbGz",
          device: "bulb",
          value: powerOn ? 0 : 1,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log("Can not toggle the State", error);
    }
  };

  const bulbImageUrl = powerOn
    ? "./images/light-bulb (1).png"
    : "./images/light-bulb.png";

  return (
    <div className="bg-[#12140073] flex flex-col border-2  w-[100%] md:w-[30%] h-[50vh] md:h-[80vh] font-bold text-4xl justify-center items-center space-y-6 rounded-3xl">
      <div className=" items-center flex justify-center flex-col gap-4 space-y-4">
        <h1 className="font-bold text-white text-center flex-wrap text-4xl sm:text-6xl md:text-4xl">
          Bulb Controls
        </h1>
        <img
          src={bulbImageUrl}
          alt="Bulb"
          className="w-[7rem] sm:w-[10rem] h-[7rem] sm:h-[10rem]"
        ></img>
        <img
          src="./images/power.svg"
          alt="Power"
          className="h-30 w-14 cursor-pointer"
          onClick={togglePower}
        ></img>
      </div>
    </div>
  );
};

export default BulbControls;
