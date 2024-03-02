import React from "react";
import { features } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { isMobile } from "react-device-detect";

const Card = ({ feature, index }) => {
  const backgroundColor = [
    "border-darkGreen",
    "border-darkBlue",
    "border-darkYellow",
  ];
  return (
    <Tilt
      className={`text-justify overflow-hidden rounded-lg border-4 
        ${backgroundColor[(index + 2) % 3]}`}
    >
      <div className="p-6">
        <div className="">
          <img className="" src={feature.image} />
        </div>

        <h3 className="text-2xl font-semibold my-2 mt-4 text-center">
          {feature.title}
        </h3>
        <p className="text-md text-tertiary-500">{feature.paragraph}</p>
      </div>
    </Tilt>
  );
};

const Features = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-16 md:py-4 px-4">
        <h3 className="text-md text-center">Our Services</h3>
        {isMobile ? (
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Make The Change You Deserve
          </h2>
        ) : (
          <motion.h2
            variants={textVariant()}
            className="text-4xl font-extrabold text-center mb-16"
          >
            Make The Change You Deserve
          </motion.h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-md:max-w-md mx-auto">
          {features &&
            features.map((feature, key) => {
              return (
                <div key={key}>
                  {isMobile ? (
                    <div>
                      <Card feature={feature} index={key}></Card>
                    </div>
                  ) : (
                    <motion.div
                      variants={fadeIn(
                        "right",
                        "spring",
                        0.5 * (key % 3),
                        0.75
                      )}
                    >
                      <Card feature={feature} index={key}></Card>
                    </motion.div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Features, "features");
