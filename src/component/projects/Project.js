import React from "react";

export default function Project() {
  return (
    <><h2 class=" p-4 flex justify-center text-4xl">PROJECTS </h2>
    <div
      id="projects-section"
      className=""
      style={{
        display: "block",
      }}
    >
      <div
        className="sm:justify-content-center"
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* card start */}
        <div
          onClick={() => {
            window.open("https://github.com/bhartinegi10269/flashcard.git");
          } }
          className="card hover-it"
          style={{
            width: "18rem",
            margin: "10px",
            padding: "40px",
          }}
        >
          <img
            className="card-img-top"
            src="https://almablog-media.s3.ap-south-1.amazonaws.com/logo_a71333ba9fe4d72fc96d_4cf04d27de.png"
            alt="Card flash" />
          <div className="card-body">
            <p className="card-text">Flash Card Project</p>
          </div>
        </div>
        {/* card end */}

        {/* card start */}
        <div
          onClick={() => {
            window.open("https://github.com/bhartinegi10269/bookmyshow.git");
          } }
          className="card hover-it"
          style={{
            width: "18rem",
            margin: "10px",
            padding: "40px",
          }}
        >
          <img
            className="card-img-top"
            style={{
              width: "206px",
              height: "86px",
              objectFit: "contain",
            }}
            src="https://tse1.mm.bing.net/th?id=OIP.5ZsLeinpkZRHV7pfVk8T8gHaEV&pid=Api&P=0&h=180"
            alt="bookmyshow" />
          <div className="card-body">
            <p className="card-text">
              BookMyShow
            </p>
          </div>
        </div>
        {/* card end */}

        {/* card start */}
        <div
        onClick={() => {
          window.open("");
        } }
          className="card"
          style={{
            width: "18rem",
            margin: "10px",
            padding: "40px",
          }}
        >
          <img
            className="card-img-top"
            src="https://almablog-media.s3.ap-south-1.amazonaws.com/Logo_of_You_Tube_2015_2017_svg_ef2bc4f282.png"
            alt="Card of youtube cap" />
          <div className="card-body">
            <p className="card-text">YouTube Backend Project</p>
          </div>
        </div>
        {/* card end */}
      </div>
    </div></>
    
  );
}
