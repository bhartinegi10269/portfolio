import React from "react";
import { Link } from "react-scroll";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <a
          className="navbar-brand hover-i"
          href=""
        >
        BhartiPortfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item hover-it">
              <Link
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
              >
                Project
              </Link>
            </li>
            <li className="nav-item hover-it">
              <Link
                to="portfolio-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item hover-it">
              <Link
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li className="nav-item hover-it">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
