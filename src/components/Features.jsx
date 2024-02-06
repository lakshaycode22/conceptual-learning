import React from "react";
import { features } from "../constants";
import { Tilt } from 'react-tilt'

const Features = () => {
  return (
    <div className="bg-primary-900 text-secondary-400">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h3 className="text-md text-center text-tertiary-200">Our Services</h3>
        <h2 className="text-4xl font-extrabold text-center mb-16 text-tertiary-200">
          Make The Change You Deserve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-md:max-w-md mx-auto">
          {features &&
            features.map((feature, key) => {
              return (
                <Tilt
                  key={key}
                  className="bg-primary-900 border-2 border-secondary-400 overflow-hidden"
                >
                  <div className="p-6">
                    <feature.icon className="text-6xl" />
                    <h3 className="text-2xl font-semibold my-2">
                      {feature.title}
                    </h3>
                    <p className="text-md">{feature.paragraph}</p>
                  </div>
                </Tilt>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Features;
