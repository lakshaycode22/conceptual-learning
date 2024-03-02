import React from "react";
import { results } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { isMobile } from "react-device-detect";

const Card = ({ result, index }) => {
  const backgroundColor = ["bg-green", "bg-blue", "bg-yellow"];
  const borderColor = ["border-green", "border-blue", "border-yellow"];
  const color = ["#23D39D", "#46DAFF", "#FFD64C"];
  const path = [
    "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
  ];
  return (
    <Tilt>
      <div class="rounded-lg">
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            src={result.image}
            class="h-80 w-full object-cover object-top rounded-lg"
          />
          <svg class="absolute left-0 bottom-0" viewBox="0 0 1440 320">
            <path fill={color[index % 3]} d={path[index % 3]}></path>
          </svg>
        </div>
        <div class={`${backgroundColor[index % 3]} rounded-lg`}>
          <h5 class="mb-4 text-2xl font-bold">{result.name}</h5>
          <p class="text-3xl mb-2">Maths: {result.maths}</p>
          <p class="text-3xl pb-8">Science: {result.science}</p>
        </div>
      </div>
    </Tilt>
  );
};

const Results = () => {
  return (
    <div class="mx-auto max-w-7xl md:my-8 md:mb-0 px-6">
      <section class=" text-center">
        <h3 className="text-md text-center">Last year results</h3>
        {isMobile ? (
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Our Achievers
          </h2>
        ) : (
          <motion.h2
            variants={textVariant()}
            className="text-4xl font-extrabold text-center mb-16"
          >
            Our Achievers
          </motion.h2>
        )}

        <div class="grid grid-cols-1 md:grid-cols-3 gap-14 mx-auto max-md:max-w-md">
          {results.map((result, key) => {
            return (
              <div key={key}>
                {isMobile ? (
                  <div class="mb-6 lg:mb-0 rounded-lg">
                    <Card result={result} index={key}></Card>
                  </div>
                ) : (
                  <motion.div
                    variants={fadeIn("right", "spring", 0.5 * (key % 3), 0.75)}
                    class="mb-6 lg:mb-0 rounded-lg"
                  >
                    <Card result={result} index={key}></Card>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper(Results, "results");
