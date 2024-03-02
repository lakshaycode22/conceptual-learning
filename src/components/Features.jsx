import React from "react";
import { features } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Features = () => {
  const backgroundColor = [
    "border-darkGreen",
    "border-darkBlue",
    "border-darkYellow",
  ];
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h3 className="text-md text-center">Our Services</h3>
        <motion.h2
          variants={textVariant()}
          className="text-4xl font-extrabold text-center mb-16"
        >
          Make The Change You Deserve
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-md:max-w-md mx-auto">
          {features &&
            features.map((feature, key) => {
              return (
                <motion.div
                  variants={fadeIn("right", "spring", 0.5 * (key % 3), 0.75)}
                >
                  <Tilt
                    key={key}
                    className={
                      "text-justify overflow-hidden rounded-lg border-4 " +
                      backgroundColor[(key + 2) % 3]
                    }
                  >
                    <div className="p-6">
                      <div className="">
                        <img
                          className=""
                          src={feature.image}
                        />
                      </div>

                      {/* <feature.icon className="text-6xl" /> */}
                      <h3 className="text-2xl font-semibold my-2 mt-4 text-center">
                        {feature.title}
                      </h3>
                      <p className="text-md text-tertiary-500">
                        {feature.paragraph}
                      </p>
                    </div>
                  </Tilt>
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Features, "features");
