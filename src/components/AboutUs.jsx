import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { FaArrowCircleRight } from "react-icons/fa";
import { textVariant } from "../utils/motion";

const AboutUs = () => {
  return (
    <div className="bg-primary-900">
      <div className="mx-8 max-w-6xl lg:mx-auto pb-16 mt-8">
        <motion.h1
          variants={textVariant()}
          className="md:text-8xl text-5xl font-black text-center md:text-left mb-4 md:mb-8 text-darkGreen font-[Libre]"
        >
          Welcome to Conceptual Learning
        </motion.h1>

        <p className="md:text-3xl text-xl text-justify md:text-left mb-4 md:mb-8 font-semibold">
          At Conceptual Learning , we believe that every student has the
          potential to excel academically and grow into confident, well-rounded
          individuals. We extend a warm welcome to you as you embark on this
          transformative journey with us.
        </p>

        <motion.h1
          variants={textVariant(1)}
          className="md:text-5xl text-3xl font-black text-center text-darkGreen md:text-left text- mb-4 md:mb-8"
        >
          About Us
        </motion.h1>
        <p className="md:text-xl text-md text-justify md:text-left mb-4 md:mb-8">
          We are a premier coaching institute dedicated to nurturing the
          academic aspirations of students from Class VIII to XII. With a focus
          on excellence in education, we specialize in offering comprehensive
          coaching programs in Mathematics, Science, English, Social Studies to
          empower students with the knowledge and skills they need to succeed.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521999693742-4717d76f97cc?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="mb-8 md:w-3/5 mx-auto"
        ></img>

        <motion.h1
          variants={textVariant(1.5)}
          className="md:text-5xl text-3xl font-black text-center md:text-left text-darkGreen text- mb-4 md:mb-8"
        >
          Mission and Values
        </motion.h1>

        <p className="md:text-xl text-md text-justify md:text-left mb-4 md:mb-8">
          Our mission at Conceptual Learning is to cultivate a dynamic learning
          environment that fosters academic excellence, holistic development,
          and personalized growth for every student. We are committed to:
        </p>
        <ul className="md:text-xl text-md text-justify md:text-left mb-4 md:mb-8">
          <li className="md:mb-4 mb-2">
            <span className="text-darkGreen font-bold flex">
              {"  "}
              <FaArrowCircleRight className="my-auto mr-2" />
              Academic Excellence:{" "}
            </span>
            Providing rigorous academic programs that challenge and inspire
            students to reach their full potential.
          </li>
          <li className="md:mb-4 mb-2">
            <span className="text-darkGreen font-bold flex">
              {" "}
              <FaArrowCircleRight className="my-auto mr-2" />
              Holistic Development:{" "}
            </span>
            Nurturing the intellectual, emotional, and social development of
            students to prepare them for success in an ever-changing world.
          </li>
          <li className="md:mb-4 mb-2">
            <span className="text-darkGreen font-bold flex">
              <FaArrowCircleRight className="my-auto mr-2" />
              Personalized Learning:{" "}
            </span>
            Tailoring our approach to meet the individual needs and learning
            styles of each student, fostering a supportive and inclusive
            learning community.
          </li>
        </ul>

        {/* <p className="md:text-3xl text-xl text-justify md:text-left mb-4 md:mb-8 font-semibold">
          At Conceptual Learning, our core values guide every aspect of our
          practices and interactions. We uphold:
        </p>
        <ul className="md:text-xl text-md text-justify md:text-left mb-4 md:mb-8">
          <li className="md:mb-4 mb-2">
            <span className="text-darkGreen font-bold flex">
              <FaArrowCircleRight className="my-auto mr-2" />
              Integrity:{" "}
            </span>
            Operating with honesty, transparency, and ethical conduct in all our
            endeavors.
          </li>
          <li className="md:mb-4 mb-2">
            <span className="text-darkGreen font-bold flex">
              <FaArrowCircleRight className="my-auto mr-2" />
              Innovation:{" "}
            </span>
            Embracing creativity, adaptability, and continuous improvement to
            enhance the learning experience.
          </li>
          <li className="md:mb-4 mb-2">
            <span className="text-darkGreen font-bold flex">
              <FaArrowCircleRight className="my-auto mr-2" />
              Inclusivity:{" "}
            </span>
            Celebrating diversity and creating an environment where every
            student feels valued, respected, and supported.
          </li>
          <li className="md:mb-4 mb-2">
            <span className="text-darkGreen font-bold flex">
              <FaArrowCircleRight className="my-auto mr-2" />
              Student-Centeredness:{" "}
            </span>
            Placing students at the heart of everything we do, prioritizing
            their needs, aspirations, and well-being.
          </li>
          <p className="md:text-xl text-md text-justify md:text-left mb-4 md:mb-8">
            As a community committed to excellence, we strive to instill these
            values in our students, empowering them to become lifelong learners,
            critical thinkers, and responsible global citizens.
          </p>
          </ul> */}
          <p className="md:text-3xl text-xl text-justify md:text-left mb-4 md:mb-8 font-semibold">
            Welcome to Conceptual Learning, where every student&#39;s journey to
            success begins!
          </p>
        
      </div>
    </div>
  );
};

export default SectionWrapper(AboutUs, "aboutUs");
