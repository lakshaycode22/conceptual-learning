import React, { useRef, useState } from "react";
import { TbMailFilled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_aqjj6d7",
        "template_hg0rkc5",
        {
          from_name: form.name,
          to_name: "Lakshay Garg",
          from_email: form.email,
          to_email: "lakshaygarg226@gmail.com",
          message: form.message,
        },
        "jKIryYtJHURfuxYGW"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className=" rounded-lg max-w-7xl mx-auto" id = "contact">
        
      <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4">
        <div>
          <h1 className="text-4xl font-extrabold text-tertiary-200 ">
            Get in Touch
          </h1>
          <p className="text-md text-gray-400 mt-3 text-tertiary-200">
            Need mentorship for your schooling? Then reach out to us, we'd love
            to hear about you.
          </p>
          <ul className="mt-12 space-y-8 text-darkGreen text-xl">
            <li className="flex items-center">
              <TbMailFilled />
              <a href="mailto: info@example.com" className="  ml-3">
                <strong>info@example.com</strong>
              </a>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt />
              <a href="tel:+09811628163" className="  ml-3">
                <strong>09811628163</strong>
              </a>
            </li>
            <li className="flex items-center">
              <FaLocationDot />
              <a className="  ml-3">
                <strong>
                  C-2/21,first floor, Sector 15, Rohini, Delhi, 110089
                </strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-gray-200 md:p-6 rounded-lg">
          <h1 className="text-4xl font-extrabold text-tertiary-200 ">
            Have a query?
          </h1>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 bg-green p-4 md:p-8 rounded-xl"
          >
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className=" py-4 px-6 text-white  rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className=" py-4 px-6   rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className=" py-4 px-6   rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-darkGreen text-white py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
