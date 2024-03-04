import React from "react";

const Footer = () => {
  return (
    <div className="border-t w-full text-sm bg-darkGreen text-white  mx-auto">
      <div className="max-w-7xl mx-auto p-10">
        <div className="mb-8 border-2 rounded-md md:flex justify-around py-8 px-8 md:px-0">
          <div className="mb-2">
            <h1 className="text-lg">Study</h1>
            <ul>
              <li>Study material</li>
              <li>NCERT Solution</li>
              <li>NCERT Books</li>
              <li>Solutions</li>
              <li>Questions</li>
              <li>Interactive Activities</li>
            </ul>
          </div>
          <div className="mb-2">
            <h1 className="text-lg">Test</h1>
            <ul>
              <li>Formative Assessment</li>
              <li>Sample Papers </li>
              <li>Chapter Test</li>
              <li>Personalized Reports</li>
              <li> Live Test Series</li>
              <li> Correspondence Test Pack</li>
            </ul>
          </div>
          <div className="mb-2">
            <h1 className="text-lg">Revise</h1>
            <ul>
              <li>Revision Notes</li>
              <li>Textbook Synopsis</li>
            </ul>
          </div>
        </div>
        <div>
          <span className="text-xl">Conceptual Learning</span> is a premier
          coaching institute dedicated to nurturing the academic aspirations of
          students from Class VIII to XII. With a focus on excellence in
          education, we specialize in offering comprehensive coaching programs
          in Mathematics, Science, English, Social Studies to empower students
          with the knowledge and skills they need to succeed.
        </div>
      </div>
    </div>
  );
};

export default Footer;
