import React, { Fragment } from "react";
import Hero from "./Hero";
import Statistics from "./Statistics";
import Features from "./Features";
import Results from "./Results";
import Testimonials from "./Testimonials";
import Map from "./Map";
import Contact from "./Contact";
import TestimonialSlider from "./TestimonialSlider";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <Fragment>
        <Hero />

        
        <Features />

        <Results />
        <Statistics />
        {/* <Testimonials /> */}
        <TestimonialSlider/>
        <FAQ/>
        <Map />
        <Contact />
    </Fragment>
  );
};

export default Home;
