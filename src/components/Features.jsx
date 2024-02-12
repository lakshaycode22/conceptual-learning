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
          variants={textVariant(0.1)}
          className="text-4xl font-extrabold text-center mb-16 text-secondary-500"
        >
          Make The Change You Deserve
        </motion.h2>
        <motion.div  variants={fadeIn("right", "spring", 0.5, 0.75)} className="grid grid-cols-1 md:grid-cols-3 gap-14 max-md:max-w-md mx-auto">
          {features &&
            features.map((feature, key) => {
              return (
                <div>
                  <Tilt
                    key={key}
                    className="bg-primary-900 border text-tertiary-200 border-tertiary-200 overflow-hidden rounded-lg shadow-card"
                  >

                    <div className="p-6">
                      <img src={feature.image} className="w-full h-48 rounded-lg"/>
                      {/* <feature.icon className="text-6xl" /> */}
                      <h3 className="text-2xl font-semibold my-2 mt-4">
                        {feature.title}
                      </h3>
                      <p className="text-md text-tertiary-500">{feature.paragraph}</p>
                    </div>
                  </Tilt>
                </div>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Features, "features");
