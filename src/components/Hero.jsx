import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import HeroBg1 from "../assets/heroImage.jpg";
import { IoMdContact } from "react-icons/io";

const Hero = () => {
  return (
    <section className=" bg-hero-pattern bg-no-repeat bg-cover h-screen">
      <div className="">
        <div className="max-w-7xl mx-auto mb-4 px-6 ">
          <div className="max-w-screen-xl text-center py-8">
            <div className="mb-2 md:text-4xl text-2xl mt-32">Welcome to</div>
            <motion.div variants={textVariant()}>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-7xl font-[Libre]">
                CONCEPTUAL LEARNING
              </h1>
            </motion.div>

            <p className="mb-2 text-xl font-normal text-gray-500 md:text-2xl">
              Where{" "}
              <span className="text-darkGreen font-semibold">
                Maths and Science
              </span>{" "}
              comes to life
            </p>
            {/* <ul className="mb-8 mx-8 md:mx-0 text-md font-normal text-gray-500 md:text-xl list-disc text-center">
            <li>Empowerment Through Education: Grades VI to XII</li>
            <li>Unleash Your Potential Across Multiple Class Levels</li>
            <li>Chart Your Course to Academic Success with Expert Guidance</li>
            <li>Join a Community of Learning Excellence</li>
            <li>Discover a Journey of Growth and Achievement</li>
          </ul> */}
            <div className=" md:flex md:justify-center mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#features"
                className="inline-flex justify-center items-center py-3 px-5 font-medium text-center  rounded-full text-white text-xl bg-black"
              >
                Learn more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    // fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    // clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center rounded-full border text-white bg-black"
              >
                <div className="flex">
                  <IoMdContact className="my-auto text-2xl mr-2" />
                  <p>Contact Us</p>
                </div>
              </a>
            </div>
          </div>
          {/* <div className=" md:w-11/12 md:mt-20 md:pl-20">
          <img
            // src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            src={HeroBg1}
            alt="image"
            className="rounded-md"
          />
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
