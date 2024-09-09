import React from "react";
import "../global.css";
export default function Header() {
  return (
    <div
      className="img-bg"
      style={{
        minHeight: "100vh",
        width: "100%",
        objectFit: "fill",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="heading">
        <p className="text">Hi, I'm Bharti Negi</p>
        <p>Web Developer 💻</p>
      </div>
    </div>
  );
}
