import React from 'react';
import NavTabs from '../NavTabs';
import resume from "../../assets/images/nathanZerrResume.pdf"
import "../../styles/style.css";

export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <div className="container">
      <a href={ resume }><h2>Click here to view my resume</h2></a>
      <h2>Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>APIs</li>
        <li>NodeJs</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>Progressive Web Apps</li>
        <li>React</li>
      </ul>
      </div>
    </>
  );
}
