import React from "react";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 2000,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
}

const Statistics = () => {
  return (
    <div className="max-w-7xl mx-auto mb-4 md:mb-0 px-6 pt-40 pb-10">
      <div className="md:flex md:justify-between">
        <div className="">
          <div className="text-center">
            <div className="md:flex justify-around">
              <div className="mb-20 md:mb-0 bg-blue py-10 px-16">
                <h2 className="display-5 mb-4 text-4xl font-bold ">
                  <img
                    className="mx-auto mt-[-100px] scale-125"
                    src="https://img-nm.mnimgs.com/img/site_content/meritnation/newHome/homepage/test-icon.png?v=1"
                    alt=""
                  />
                  <Number n={1087} />+
                </h2>
                <h5 className="mb-4 text-2xl font-bold">Happy students</h5>
              </div>

              <div className="mb-20 md:mb-0 bg-yellow py-10 px-16">
                <img
                  className="mx-auto mt-[-100px] scale-125"
                  src="https://img-nm.mnimgs.com/img/site_content/meritnation/newHome/homepage/doubt-icon.png?v=1"
                  alt=""
                />
                <h2 className="display-5 mb-4 text-4xl font-bold ">
                  <Number n={97} />%
                </h2>
                <h5 className="mb-4 text-2xl font-bold">Average Score</h5>
              </div>

              <div className="mb-10 md:mb-0 bg-green py-10 px-16">
                <img
                  className="mx-auto mt-[-100px] scale-125"
                  src="https://img-nm.mnimgs.com/img/site_content/meritnation/newHome/homepage/quest-icon.png?v=1"
                  alt=""
                />
                <h2 className="display-5 mb-4 text-4xl font-bold ">
                  <Number n={156} />+
                </h2>
                <h5 className="mb-4 text-2xl font-bold">Yearly Classes</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="md:my-auto">
          <a
            href=""
            className=" py-3 px-5 text-2xl font-medium text-center  rounded-full text-white  green-blue-gradient"
          >
            {" "}
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
