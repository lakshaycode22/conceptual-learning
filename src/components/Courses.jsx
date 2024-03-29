import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { courses } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { TbMathSymbols } from "react-icons/tb";
import { MdScience } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";

const Courses = () => {
  const [data, setData] = useState(courses[0]);
  const grades = [
    "Class IX",
    "Class X",
    "Class XI(Commerce)",
    "Class XII(Commerce)",
  ];
  const color = ["green", "blue", "yellow"];

  return (
    <div className="bg-primary-900">
      <div className="mx-8 max-w-6xl lg:mx-auto pb-16 text-justify">
        <motion.h1
          variants={textVariant()}
          className="text-5xl font-extrabold text-center mb-16"
        >
          Courses
        </motion.h1>

        <div className="mb-16">
          <div className="md:flex font-bold md:justify-around text-center">
            {grades &&
              grades.map((grade, key) => {
                return (
                  <div className="rounded-lg mb-2">
                    <button
                      onClick={() => setData(courses[key])}
                      className={`rounded-lg w-60 p-4  text-black bg-${
                        color[key % 3]
                      }`}
                    >
                      {grade}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>

        {data && (
          <div className="">
            <h1
              variants={textVariant()}
              className="text-center font-semibold mt-8 text-secondary-500 text-2xl md:text-4xl"
            >
              {data.class}
            </h1>
            <div className="m-auto">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="mt-10"
              />
            </div>
            <div className="text-md md:text-lg">
              <div className=" mb-8 md:mb-0 ">
                <div className="flex-1 py-8 max-w-screen-xl md:text-left lg:py-16">
                  <p className="text-justify">{data.brief}</p>
                </div>

                {/* <div className="flex-1 flex flex-col  my-auto"> */}
              </div>

              <div className="md:grid md:grid-cols-5 md:gap-6 mb-10">
                <div className="px-20 py-10 shadow-lg shadow-green/50 hover:border-2 hover:border-green text-center">
                  <TbMathSymbols className="text-6xl" />
                  <div className="mt=2 text-xl">Maths</div>
                </div>
                <div className="px-20 py-10 shadow-lg shadow-blue/50 hover:border-2 hover:border-blue text-center">
                  <MdScience className="text-6xl" />
                  <div className="mt=2 text-xl">Science</div>
                </div>
                <div className="px-20 py-10 shadow-lg shadow-yellow/50 hover:border-2 hover:border-yellow text-center">
                  <RiEnglishInput className="text-6xl" />
                  <div className="mt=2 text-xl">English</div>
                </div>
                <div className="px-20 py-10 shadow-lg shadow-green/50 hover:border-2 hover:border-green text-center">
                  <TbMathSymbols className="text-6xl" />
                  <div className="mt=2 text-xl">Maths</div>
                </div>
                <div className="px-20 py-10 shadow-lg shadow-blue/50 hover:border-2 hover:border-blue text-center">
                  <MdScience className="text-6xl" />
                  <div className="mt=2 text-xl">Science</div>
                </div>
                <div className="px-20 py-10 shadow-lg shadow-yellow/50 hover:border-2 hover:border-yellow text-center">
                  <RiEnglishInput className="text-6xl" />
                  <div className="mt=2 text-xl">English</div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-secondary-500 my-2 mt-8">
                Attributes
              </h2>
              <ul className="list-disc mt-8">
                {data.attributes &&
                  data.attributes.map((attribute, key) => {
                    return <li key={key}>{attribute}</li>;
                  })}
              </ul>

              <div className="md:flex gap-8 mt-10">
                {data.subjects &&
                  data.subjects.map((subject, key) => {
                    return (
                      <div
                        key={key}
                        className="text-center md:text-left border-2 mb-4 shadow-lg shadow-black/50"
                      >
                        <h2 className="text-2xl font-semibold text-secondary-500 p-4 border-b-2">
                          {subject.title}
                        </h2>
                        <ul className="m-2">
                          {subject.chapters.map((chapter, key) => {
                            return (
                              <li key={key} className="flex p-1 text-left">
                                {" "}
                                <MdArrowForwardIos className="my-auto mx-2" />{" "}
                                {chapter}
                              </li>
                            );
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
