import React from "react";
import { Navigation } from "../components";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className="p-5">
      <Navigation />

      <h1 className="text-3xl text-green-600 p-2">About Us</h1>
    </div>
  );
};

export default About;
