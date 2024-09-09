import React from "react";

export default function Portfolio() {
  return (
    <><h1 className="flex justify-center mt-5 text-4xl"> TECH SKILLS</h1><div
      className="containerbox center bg-hover "
      id="portfolio-section"
      style={{ display: "flex", flexDirection: "row", gap: "20px" }}
    >
      <div className="bg-dark text-white"
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        React
      </div>
     
      <div
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "brown",
        }}
      >
        NextJs
      </div>
     
      <div className="bg-info"
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "yellow",
        }}
      >
        CSS
      </div>
    
      <div
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "gray",
        }}
      >
        HTML
      </div>
     
      <div
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
        }}
      >
        Node
      </div>
     
      <div className="bg-dark text-white"
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        FireBase
      </div>
      
      <div className="bg-danger text-white"
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Git
      </div>
     
      <div className="bg-success text-white"
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Js
      </div>
     
      <div className="bg-dark text-white"
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Bootstrap
      </div>


    </div></>
    
  );
}
