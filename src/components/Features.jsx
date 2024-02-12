import React from "react";
import { features } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Features = () => {
  return (
    <div className="bg-primary-900 text-secondary-400">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h3 className="text-md text-center text-tertiary-200">Our Services</h3>
        <motion.h2
          variants={textVariant()}
          className="text-4xl font-extrabold text-center mb-16 text-secondary-500"
        >
          Make The Change You Deserve
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-md:max-w-md mx-auto">
          {features &&
            features.map((feature, key) => {
              return (
                <motion.div variants={fadeIn("right", "spring", 0.5 * key, 0.75)}>
                  <Tilt
                    key={key}
                    className="bg-primary-900 border text-tertiary-200 border-tertiary-200 overflow-hidden rounded-lg shadow-card"
                  >

                    <div className="p-6">
                      {/* <feature.icon className="text-6xl" /> */}
                      <img src={feature.image} className="w-full h-48 rounded-lg"/>
                      <h3 className="text-2xl font-semibold my-2 mt-4">
                        {feature.title}
                      </h3>
                      <p className="text-md">{feature.paragraph}</p>
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
