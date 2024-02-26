import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className= "max-w-7xl mx-auto  text-tertiary-200 md:flex mb-4 md:mb-0 px-6">
      <div className="py-8 max-w-screen-xl text-center md:text-left lg:py-16">
        <div className="mb-2">
          Visit us today
        </div>
        <motion.h1 variants={textVariant()} class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-7xl text-secondary-500">
        {/* <ReactTyped
          strings={["Conceptual Learning","Sandeep Bhasin"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        /> */}
        Conceptual Learning
        </motion.h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
          A reliable source when you need help understanding any subject. We
          invest in the world’s potential.
        </p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="#features"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4"
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
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border"
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
      <div className="ml-auto md:w-9/12 md:pt-8">
        <img src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image" className="rounded-md" />
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
