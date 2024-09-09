import React, { useState } from "react";

export default function ContactUs() {
  return (
    <>
      <h2 class="flex justify-center text-4xl mt-8">CONTACT ME</h2>
      <div class="flex justify-center">
      <div class="container-box rounded container bg-gray-300 mb-10 mt-4">

        <div className=" mt-16 mb-16 d-flex gap-2 flex justify-center">
          <button
            className="btn btn-warning z-index-30"
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/u/0/#inbox"
              );
            }}
          >
            Email Me
          </button>
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
              window.open("https://www.linkedin.com/in/bharti-negi-87b4a3310/");
            }}
          >
            LinkedIn
          </button>
          <button
            className="btn btn-info z-index-30"
            onClick={() => {
              window.open(
                "https://x.com/i/flow/login?redirect_after_login=%2Fhome"
              );
            }}
          >
            Twitter
          </button>
        </div>
      </div>
      </div>
    </>
  );
}
