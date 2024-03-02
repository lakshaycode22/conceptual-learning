import React, { useEffect, useState } from "react";
import { testimonials } from "../constants";
import { PiQuotesFill } from "react-icons/pi";
import { IoStarSharp } from "react-icons/io5";

const TestimonialSlider = () => {
  // useEffect(() => {
  //   setInterval(() => setIndex(index + 1), 1000 * 2);
  // }, [index]);
  const [index, setIndex] = useState(0);
  const color = ["text-green", "text-blue", "text-yellow"];
  return (
    <div className=" mx-auto  mb-4 pt-14 px-6">
      <div className="mb-10 space-y-4 px-6 md:px-0">
        <h2 className="text-center text-2xl mb-20 font-bold md:text-4xl">
          What Others Say About Us
        </h2>
      </div>
      <div className="">
        <div className="flex animate-marquee-infinite">
          {testimonials &&
            testimonials.map((testimonial, key) => {
              return (
                <div
                  className="text-center w-[200px] md:w-[400px] mx-20 shrink-0"
                  key={key}
                >
                  <div
                    className={
                      "flex justify-center text-6xl md:text-8xl " +
                      color[key % 3]
                    }
                  >
                    <PiQuotesFill />
                  </div>
                 
                  <h1 className="md:text-4xl text-2xl font-semibold">
                    {testimonial.author}
                  </h1>
                  <div className="flex justify-center my-4">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </div>
                  <p className="text-lg">{testimonial.comment}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
