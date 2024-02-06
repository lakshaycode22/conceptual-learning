import React from "react";

const About = () => {
  return (
    <div className="bg-primary-900">
      <div className="container mx-auto">
        <section className=" text-center lg:text-left">
          <div className="py-12 px-6 md:px-12">
            <h2 className="text-4xl text-tertiary-200 font-extrabold text-center mb-16">
              About the Tutor
            </h2>
            <div className="container mx-auto xl:px-32">
              <div className="grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-secondary-500 px-6 py-12  backdrop-blur-[25px] dark:bg-secondary-500 border-primary-900 border-4 dark:shadow-black/20 md:px-12 lg:-mr-14">
                    <h2 className="mb-2 text-3xl font-bold text-primary-900 dark:text-primary-900">
                      Sandeep Bhasin
                    </h2>
                    <p className="mb-4 font-semibold text-primary-700">Tutor</p>
                    <p className="mb-6  text-primary-900 dark:text-primary-900">
                      Nunc tincidunt vulputate elit. Mauris varius purus
                      malesuada neque iaculis malesuada. Aenean gravida magna
                      orci, non efficitur est porta id. Donec magna diam.
                    </p>
                    <p className="mb-6  text-primary-900 dark:text-primary-900">
                      Ad, at blanditiis quaerat laborum officia incidunt
                      cupiditate dignissimos voluptates eius aliquid minus
                      praesentium! Perferendis et totam ipsum ex aut earum
                      libero accusamus voluptas quod numquam saepe, consequuntur
                      nihil quia tenetur consequatur. Quis, explicabo deserunt
                      quasi assumenda ea maiores nulla, et dolor saepe
                      praesentium natus error reiciendis voluptas iste. Esse,
                      laudantium ipsum animi, quos voluptatibus atque vero
                      repellat sit eligendi autem maiores quasi cum aperiam.
                      Aperiam rerum culpa accusantium, ducimus deserunt aliquid
                      alias vitae quasi corporis placeat vel maiores explicabo
                      commodi!
                    </p>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <img
                    src="https://images.unsplash.com/flagged/photo-1574110906643-8311b0ce29d3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
