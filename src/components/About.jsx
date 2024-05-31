import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-3/4 h-70vh">
        <div className="pb-8">
          <p className="text-4xl font-bold flex justify-center">
            ABOUT ME
          </p>
        </div>
        <p className="text-md md:text-xl mt-10 md:mt-1 text-justify  ">
          Web Developer with expertise of React.js, Redux, HTML
          and CSS. currently learning React Native for Mobile Application.
          <br />
          <br/>
          I am passionate programmer and a learner, born and brought up in
          India. Currently, I am looking for a job".
          <br />
          <br/>
          I'm dedicated and creative web developer with a passion for building
          beautiful, functional, and user-friendly websites. With a background
          in both front-end and back-end development, I enjoy turning complex
          problems into simple, elegant solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
