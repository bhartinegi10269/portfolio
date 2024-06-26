import React from "react";
import css from "../css.png";
import github from "../github.png";
import html from "../html.png";
import javascript from "../javascript.png";
import reactImage from "../react.png";
import nextjs from "../nextjs.png";
import tailwind from "../tailwind.png";
import node from "../node.png";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-700",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: node,
      title: "Node Js",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-20 pb-4"
    >
      <div className="max-w-screen-lg mx-auto p-4 inline w-full h-full  text-white">
        <div>
          <p className="text-5xl font-bold px-18 flex justify-center">
            TECH SKILLS
          </p>
          <p className="py-4 px-14 flex justify-center">These are the various technologies I've knowledge about it </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-14">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              style={{ '--tw-shadow-colored': '0 4px 6px -1px var(--tw-shadow-color), 0px 1px 4px 0px var(--tw-shadow-color)' }}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
