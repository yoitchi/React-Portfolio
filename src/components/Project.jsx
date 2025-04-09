import React from "react";

function Project() {
  return (
    <section id="Project" className="project--section">
      <h2 className="project--title">My Projects</h2>
      <div className="project--container">
        <div className="project--card">
          <img 
            src="/img/9.png" // Replace with your actual image path
            alt="Sperm bank" 
            className="project--image"
          />
          <h3 className="project--name">Sperm bank</h3>
          <p className="project--description">
          </p>
          <a
            href="https://www.figma.com/proto/5gDOnVQaEpNRoUNZajsn9o/Untitled?node-id=71-12376&starting-point-node-id=71%3A12376&scaling=contain&content-scaling=fixed" // Replace with your actual project URL
            target="_blank"
            rel="noopener noreferrer"
            className="project--view-btn"
          >
            View
          </a>
        </div>
        <div className="project--card">
          <img 
            src="/img/11.png" // Replace with your actual image path
            alt="Project 2 Preview" 
            className="project--image"
          />
          <h3 className="project--name">Mabini Redesign</h3>
          <p className="project--description">
          </p>
          <a
            href="https://www.figma.com/proto/a1mEsw0Jcmr84FUVpKR1E3/Mabini-Redesign?node-id=1-311&p=f&t=cvWIZt87ygdXvArW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" // Replace with your actual project URL
            target="_blank"
            rel="noopener noreferrer"
            className="project--view-btn"
          >
            View
          </a>
        </div>
        <div className="project--card">
          <img 
            src="/img/12.png" // Replace with your actual image path
            alt="Project 3 Preview" 
            className="project--image"
          />
          <h3 className="project--name">Python Portfolio</h3>
          <p className="project--description">.
          </p>
          <a
            href="https://yoitchi.github.io/portfolio.py/?fbclid=IwY2xjawJdxZFleHRuA2FlbQIxMAABHoN4SAliv8iDI-nucIK3B0gXKdalvanM9Z0WKScws45yuDJ_I6Olwj3q-gyO_aem_lyUOYgcWk7dH1zTLJpuGxQ" // Replace with your actual project URL
            target="_blank"
            rel="noopener noreferrer"
            className="project--view-btn"
          >
            View
          </a>
        </div>
        <div className="project--card">
          <img 
            src="/img/13.png" // Replace with your actual image path
            alt="Project 4 Preview" 
            className="project--image"
          />
          <h3 className="project--name">Sample Web</h3>
          <p className="project--description">
          </p>
          <a
            href="https://block-fi.my.canva.site/ecocircle?fbclid=IwY2xjawJeBHBleHRuA2FlbQIxMAABHu4w9PNRyCaO73SmaPuoBQ2a5kNayZHcSuHjDKpUayOogmVnYH-XEgozM_tg_aem_5PeJLkuxWea3k7P9kLg3BA" // Replace with your actual project URL
            target="_blank"
            rel="noopener noreferrer"
            className="project--view-btn"
          >
            View
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;