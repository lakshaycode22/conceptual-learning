import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import HeroBg1 from "../assets/HeroBg1.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto  md:flex mb-4 md:mb-0 px-6">
      <div className="max-w-screen-xl text-center md:text-left py-8">
        <div className="mb-2 md:text-4xl text-2xl">Welcome to</div>
        <motion.h1
          variants={textVariant()}
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-7xl text-secondary-500 border-b-2 border-darkGreen"
        >
          CONCEPTUAL LEARNING
        </motion.h1>
        <p class="mb-2 text-xl font-normal text-gray-500 md:text-2xl">
          Where{" "}
          <span className="text-darkGreen font-semibold">
            Maths and Science
          </span>{" "}
          comes to life
        </p>
        <ul class="mb-8 mx-8 md:mx-0 text-md font-normal text-gray-500 md:text-xl list-disc text-left">
          <li>Empowerment Through Education: Grades VI to XII</li>
          <li>Unleash Your Potential Across Multiple Class Levels</li>
          <li>Chart Your Course to Academic Success with Expert Guidance</li>
          <li>Join a Community of Learning Excellence</li>
          <li>Discover a Journey of Growth and Achievement</li>
        </ul>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="#features"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-full text-white text-xl green-blue-gradient"
          >
            Learn more
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-full border"
          >
            <svg
              class="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch video
          </a>
        </div>
      </div>
      <div className=" md:w-11/12 md:mt-20 md:pl-20">
        <img
          // src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          src={HeroBg1}
          alt="image"
          className="rounded-md"
        />
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
