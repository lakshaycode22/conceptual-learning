import React from "react";

const Map = () => {
  return (
    <div className="bg-primary-900 py-20">
      <div className="overflow-hidden mx-8 md:mx-20">
      <h2 className="text-center font-bold pb-12 text-tertiary-200 text-4xl">
            Visit Us
          </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6997.12874913192!2d77.12673078774003!3d28.73256204494475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01ad163802a9%3A0x57fc0afeec0c757f!2sConceptual%20learning!5e0!3m2!1sen!2sin!4v1707140309525!5m2!1sen!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-80 md:h-[28rem]"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
