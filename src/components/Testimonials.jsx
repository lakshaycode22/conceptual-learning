import React from "react";
import { testimonials } from "../constants";
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  return (
    <div className="bg-secondary-500 text-primary-900 mt-24 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold md:text-4xl">
            What Others Say About Us
          </h2>
        </div>

        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8 ">
          {testimonials &&
            testimonials.map((testimonial, key) => {
              return (
                <div className="bg-primary-900 text-tertiary-200 rounded-xl">
                  <div
                    key={key}
                    className="aspect-auto p-8 rounded-2xl "
                  >
                    <div className="flex gap-4">
                      <div>
                        <h6 className="text-2xl font-bold">
                          <ImQuotesLeft className="text-4xl" />
                          {testimonial.author}
                        </h6>
                      </div>
                    </div>
                    <p className="mt-8 text-md ">{testimonial.comment}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
