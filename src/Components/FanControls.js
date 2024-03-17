import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Controls = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    try {
      axios.get(`/devices/HDQcbGz`).then((response) => {
        const { fan } = response.data;
        setCount(fan);
      });
    } catch (error) {
      console.log("Can not get the details", error);
    }
  }, []);

  function decreaseHandler() {
    setCount(count < 1 ? 0 : count - 1);
    let speed = count - 1;
    try {
      axios
        .post("/devices", {
          teamid: "HDQcbGz",
          device: "fan",
          value: speed,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log("Can not decrease the speed", error);
    }
  }
  function increaseHandler() {
    setCount(count > 4 ? 5 : count + 1);
    let speed = count + 1;
    try {
      axios
        .post("/devices", {
          teamid: "HDQcbGz",
          device: "fan",
          value: speed,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log("Can not increase the speed", error);
    }
  }

  function resetHandler() {
    setCount(0);
    let speed = 0;
    try {
      axios
        .post("/devices", {
          teamid: "HDQcbGz",
          device: "fan",
          value: speed,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log("Can not reset the speed", error);
    }
  }

  // Calculate the rotation degree based on the count
  return (
    <div className=" bg-[#12140073] flex flex-col border-2  w-[100%] md:w-[30%] h-[50vh] md:h-[80vh] font-bold  justify-center items-center space-y-6 rounded-3xl">
      <div className=" items-center flex justify-center flex-col gap-4 space-y-4 text-white">
        <h1 className="text-4xl sm:text-6xl md:text-4xl">Fan Controls</h1>
        <div
          className={count === 0 ? "fan-animation_none" : "fan-animation"}
          style={{ animationDuration: `${6 - count}s` }}
        ></div>
        <div className=" bg-transparent text-white border-2  mx-auto border-white rounded-2xl  flex  gap-4 py-2">
          <button
            onClick={decreaseHandler}
            className={`border-r-2 text-center w-20 border-[#bfbfbf]  text-4xl`}
          >
            -
          </button>
          <div className="font-bold gap-12 text-4xl sm:text-6xl md:text-4xl">
            {" "}
            {count}{" "}
          </div>
          <button
            onClick={increaseHandler}
            className={`border-l-2 text-center w-20 border-[#bfbfbf]  text-4xl `}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={resetHandler}
            className="bg-[#0398d4] text-white px-5 py-2 rounded-2xl text-lg"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
