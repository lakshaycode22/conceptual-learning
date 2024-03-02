import React, { useEffect, useState } from "react";
import { testimonials } from "../constants";
import { GrLinkPrevious } from "react-icons/gr";
import { PiQuotesFill } from "react-icons/pi";
import { GrLinkNext } from "react-icons/gr";

const TestimonialSlider = () => {
  // useEffect(() => {
  //   setInterval(() => setIndex(index + 1), 1000 * 2);
  // }, [index]);
  const [index, setIndex] = useState(0);
  const color = ["text-green", "text-blue", "text-yellow"];
  return (
    <div className="max-w-7xl mx-auto  mb-4 md:py-28 py-14 px-6">
      <div className="mb-10 space-y-4 px-6 md:px-0">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          What Others Say About Us
        </h2>
      </div>
      <div className="flex space-x-16 animate-infinite-scroll">
        {/* <div className="hidden md:block text-4xl my-auto">
          <GrLinkPrevious
            onClick={() => {
              if (index === 0) setIndex(testimonials.length - 1);
              else setIndex(index - 1);
            }}
          />
        </div> */}
        {testimonials &&
          testimonials.map((testimonial, key) => {
            return (
              <div className="text-center">
                <div
                  className={
                    "flex justify-center text-6xl md:text-8xl " + color[key % 3]
                  }
                >
                  <PiQuotesFill />
                </div>
                <h1 className="md:text-4xl text-2xl font-semibold mb-8">
                  {testimonial.author}
                </h1>
                <p className="text-lg">{testimonial.comment}</p>
              </div>
            );
          })}

        {/* <div className="md:w-[40rem] text-center">
          <div
            className={
              "flex justify-center text-6xl md:text-8xl " + color[index % 3]
            }
          >
            <PiQuotesFill />
          </div>
          <h1 className="md:text-4xl text-2xl font-semibold mb-8">
            {testimonials[index].author}
          </h1>
          <p className="text-lg h-96 md:h-24">{testimonials[index].comment}</p>
        </div> */}

        {/* <div className="hidden md:block text-4xl my-auto">
          <GrLinkNext
            onClick={() => {
              if (index === testimonials.length - 1) setIndex(0);
              else setIndex(index + 1);
            }}
          />
        </div> */}

        <div className="flex md:hidden md:justify-center md:mt-12 text-2xl justify-around">
          <GrLinkPrevious
            onClick={() => {
              if (index === 0) setIndex(testimonials.length - 1);
              else setIndex(index - 1);
            }}
          />
          <GrLinkNext
            onClick={() => {
              if (index === testimonials.length - 1) setIndex(0);
              else setIndex(index + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
