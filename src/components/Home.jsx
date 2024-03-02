import React, { Fragment } from "react";
import Hero from "./Hero";
import Statistics from "./Statistics";
import Features from "./Features";
import Results from "./Results";
import Testimonials from "./Testimonials";
import Map from "./Map";
import Contact from "./Contact";
import TestimonialSlider from "./TestimonialSlider";

const Home = () => {
  return (
    <Fragment>
        <Hero />

        <Statistics />
        <Features />

        <Results />
        {/* <Testimonials /> */}
        <TestimonialSlider/>
        <Map />
        <Contact />
    </Fragment>
  );
};

export default Home;
