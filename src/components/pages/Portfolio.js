import React from "react";
import { projects } from "../../Projects";
import "../../styles/style.css";



export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
          <div className="container">
            {projects.map((project) => (
              <div class="card m-4">
                <img src={project.image} class="card-img-top" alt="screenshot of project" />
                <div class="card-body">
                  <h2 class="card-text">{project.title}</h2>
                  <a href={project.gitlink}>GitHub Link</a>
                  <br />
                  <a href={project.deployed}>Deployed Link</a>
                </div>
              </div>
            ))}
            </div>
    </>
  );
}
