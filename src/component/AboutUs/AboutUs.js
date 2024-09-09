import React from "react";
import imgLeft from "../assert/about-us-demo.jpg";
import downloadpdf from "../download/resume.pdf";
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = downloadpdf;
  link.download = "resume-Developer.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
export default function AboutUs() {
  return (
    <div id="about-section " className="about containerbox">
      <h1 class="text-4xl">ABOUT ME</h1>
      <p class="mb-4">(Web Developer)</p>
      <div className="grid center ">
        <img src={imgLeft} alt="" className="img-width" />
        <p
          className="para"
          class="text-1xl text-justify align-items-start p-3 rounded align-text-left"
        >
          Hi there! I’m Bharti Negi, a passionate and motivated frontend web
          developer with a strong foundation in creating responsive,
          user-friendly websites and web applications. Although I’m just
          starting my journey in the tech industry, I have gained hands-on
          experience through various personal projects and self-learning. <br />
          <br />
          With a solid understanding of HTML, CSS, JavaScript, and frameworks
          like Tailwind CSS and React.js, I am committed to delivering clean,
          efficient code that enhances user experience. My focus is on writing
          maintainable code and continuously learning about new tools and
          techniques that will help me grow as a developer.
          <br /> <br />
          <button
            className="btn btn-danger z-index-30"
            onClick={downloadResume}
          >
            Cv/Resume
          </button>
          <div className=" mt-4 d-flex gap-2">
            <button
              className="btn btn-success text-white z-index-30"
              onClick={(e) => {
                window.open("https://github.com/bhartinegi10269", "_blank");
              }}
            >
              GitHub
            </button>
            <button
              className="btn btn-secondary z-index-30"
              onClick={(e) => {
                window.open(
                  "https://www.instagram.com/exploooorrrreeee?igsh=MTFhYXBicjE4bWVvNw==",
                  "_blank"
                );
              }}
            >
              Instagram
            </button>
            <button
              className="btn btn-primary z-index-30"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/bharti-negi-87b4a3310/"
                );
              }}
            >
              LinkedIn
            </button>
          </div>
        </p>
      </div>
    </div>
  );
}
