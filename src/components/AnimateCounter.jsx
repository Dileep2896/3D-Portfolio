import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimateCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32 mr-2">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {counterItems.map((item) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={item.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <CountUp
                suffix={item.suffix}
                prefix={item.prefix}
                end={item.value}
                decimals={Number.isInteger(item.value) ? 0 : 2}
              />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimateCounter;
