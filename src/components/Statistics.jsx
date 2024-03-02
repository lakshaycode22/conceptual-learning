import React from "react";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
}

const Statistics = () => {
  return (
    <div className="max-w-7xl mx-auto mb-4 md:mb-0 px-6">
      <div className=" mx-auto md:px-6">
        <section className="text-center">
          <div className="md:flex justify-around">
            <div className="mb-12 md:mb-0 bg-blue rounded-xl py-10 px-16">
              <h2 className="display-5 mb-4 text-4xl font-bold "><Number n={1087} />+</h2>
              <h5 className="mb-4 text-2xl font-bold">Happy students</h5>
            </div>

            <div className="mb-12 md:mb-0 bg-yellow rounded-xl py-10 px-16">
              <h2 className="display-5 mb-4 text-4xl font-bold ">
                <Number n={97} />%
              </h2>
              <h5 className="mb-4 text-2xl font-bold">Average Score</h5>
            </div>

            <div className=" md:mb-0 bg-green rounded-xl py-10 px-16">
              <h2 className="display-5 mb-4 text-4xl font-bold "><Number n={156} />+</h2>
              <h5 className="mb-4 text-2xl font-bold">Yearly Classes</h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Statistics;
