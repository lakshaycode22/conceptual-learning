import React, { useState } from "react";

import { courses } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Courses = () => {
  const [data, setData] = useState(courses[0]);
  const grades = [
    "Class IX",
    "Class X",
    "Class XI(Commerce)",
    "Class XII(Commerce)",
  ];

  return (
    <div className="bg-primary-900">
      <div className="mx-8 max-w-6xl lg:mx-auto pb-16 text-justify">
        <motion.h1
          variants={textVariant()}
          className="text-5xl font-extrabold text-center mb-16 text-secondary-500"
        >
          Courses
        </motion.h1>

        <div className="mb-16">
          <div className="md:flex md:justify-around text-center">
            {grades &&
              grades.map((grade, key) => {
                return (
                  <motion.button
                    key={key}
                    variants={fadeIn("right", "spring", 0.5 * (key % 4), 0.75)}
                    onClick={() => setData(courses[key])}
                    className="border-2 mx-2 rounded-lg w-60 p-4 hover:bg-secondary-600 hover:border-secondary-500 hover:text-primary-900 my-2"
                  >
                    {grade}
                  </motion.button>
                );
              })}
          </div>
        </div>

        {data && (
          <div className="">
            <h1 className="text-center mt-8 text-secondary-500 text-2xl md:text-4xl">
              {data.class}
            </h1>
            <div className="text-md md:text-lg">
              <div className="md:flex mb-8 md:mb-0 ">
                <div className="flex-1 py-8 max-w-screen-xl md:text-left lg:py-16">
                  <p className="text-justify">{data.brief}</p>
                </div>

                <div className="flex-1 flex flex-col  my-auto">
                  <img
                    src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="ml-auto md:w-10/12 align-center"
                  />
                </div>
              </div>

              <div className="md:flex md:justify-around">
                {data.subjects.map((subject, key) => {
                  return (
                    <div key={key} className="text-center md:text-left">
                      <h2 className="text-2xl text-secondary-500 my-2">
                        {subject.title}
                      </h2>
                      <ul className="list-disc">
                        {subject.chapters.map((chapter, key) => {
                          return <li key={key}>{chapter}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <p className="text-tertiary-200 my-16">{data.additional_info}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Courses, "courses");
