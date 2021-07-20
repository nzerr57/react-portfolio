import React from 'react';
import profPic from "../../assets/images/profile-pic.jpg";

export default function About() {
  return (
    <>
      <h1>About Me</h1>
      <div className="container">
        <img alt="profile pic" src= { profPic } />

        <p>Hi, my name is Nathan Zerr, and I am currently attending the UNC Charlotte Full-Stack coding bootcamp. I have had
          an interest in learning to code for awhile and am excited to finally have the opportunity to better my
          skills. I plan to pursue a career in technology after the conclusion of the bootcamp.</p>
        <p>I am originally from Indiana, which is where I attended college at Purdue University. I graduated with a
          degree in management in 2016 and shortly thereafter moved to the Charlotte, NC area. In my free time I enjoy
          woodworking, doing home renovation projects, and playing golf.</p>
      </div>
    </>
  );
}
