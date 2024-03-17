import React, { useState, useEffect } from "react";
import axios from "axios";
const AcControls = () => {
  const [count, setCount] = useState(16);
  const [powerOn, setPowerOn] = useState(false);

  useEffect(() => {
    try {
      axios.get(`/devices/HDQcbGz`).then((response) => {
        const { ac } = response.data;
        const { temp, state } = ac;
        setCount(temp);
        setPowerOn(state);
      });
    } catch (error) {
      console.log("Can Not get the details of the device", error);
    }
  }, []);

  const togglePower = () => {
    setPowerOn((prevPower) => !prevPower);

    try {
      axios
        .post("/devices", {
          teamid: "HDQcbGz",
          device: "ac",
          value: { temp: count, state: !powerOn },
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log("Can not toggle the Power", error);
    }
  };

  const decreaseHandler = () => {
    if (powerOn) {
      setCount((prevCount) => (prevCount < 17 ? 16 : prevCount - 1));
      try {
        axios
          .post("/devices", {
            teamid: "HDQcbGz",
            device: "ac",
            value: { temp: count < 17 ? 16 : count - 1, state: powerOn },
          })
          .then((response) => {
            console.log(response);
          });
      } catch (error) {
        console.log("Can not decrease", error);
      }
    } else {
      console.log("Not Power ON");
    }
  };

  const increaseHandler = () => {
    if (powerOn) {
      setCount((prevCount) => (prevCount > 29 ? 30 : prevCount + 1));
      try {
        axios
          .post("/devices", {
            teamid: "HDQcbGz",
            device: "ac",
            value: { temp: count + 1, state: powerOn },
          })
          .then((response) => {
            console.log(response);
          });
      } catch (error) {
        console.log("Can not increase ");
      }
    } else {
      console.log("not power on");
    }
  };

  const resetHandler = () => {
    setCount(16);
    try {
      axios
        .post("/devices", {
          teamid: "HDQcbGz",
          device: "ac",
          value: { temp: 16, state: powerOn },
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log("Can not reset", error);
    }
  };

  const imageUrl = powerOn
    ? "./images/air-conditioner (2).png"
    : "./images/air-conditioner (1).png";

  return (
    <div className="bg-[#12140073] flex flex-col border-2  w-[100%] md:w-[30%] h-[50vh] md:h-[80vh] font-bold  justify-center items-center space-y-6 rounded-3xl">
      <div className=" items-center flex justify-center flex-col gap-4 space-y-4 text-white">
        <h1 className="text-4xl sm:text-6xl md:text-4xl">Ac Controls</h1>

        <img
          src={imageUrl}
          alt="AC"
          className="h-[8rem] md:h-[13rem] w-[10rem] md:w-[12rem]"
        />
        <div className=" bg-transparent text-white border-2  border-white rounded-2xl  flex  gap-2 py-2">
          <button
            onClick={decreaseHandler}
            className={`border-r-2 text-center w-20 border-[#bfbfbf]  text-4xl`}
          >
            -
          </button>
          <div className="font-bold gap-12 text-4xl"> {count} </div>
          <button
            onClick={increaseHandler}
            className={`border-l-2 text-center w-20 border-[#bfbfbf]  text-4xl`}
          >
            +
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <button
            onClick={resetHandler}
            className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-base"
          >
            RESET
          </button>
          <img
            src="./images/power.svg"
            alt="Power"
            className="h-12 w-16 cursor-pointer"
            onClick={togglePower}
          />
        </div>
      </div>
    </div>
  );
};

export default AcControls;
