import React from "react";
import flashcard from "../assets/projects/flashcard.gif";
import SignupForm from "../assets/projects/SignupForm.png";
import Quiz from "../assets/projects/quiz.png";
import Calculator from "../assets/projects/calculator.png";

const Projects = () => {
  const projects = [
    flashcard,
    SignupForm,
    Quiz,
    Calculator,
  ];
  return (
    <div
      name="porjects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-5"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold flex justify-center">
            PROJECTS
          </p>
          <p className="py-6 flex justify-center">Checkout some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((projects, index) => (
            <div key={index} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={projects}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-2/3 w-full"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
