export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--content--container">
          <h1 className="skills-section--heading">About Me</h1>
          <div className="about--description--box">
            <p className="hero--section-description">
              Hi! I'm John Bladimir, a passionate web developer sharpening my skills at Mabini Colleges Daet. With 4 months of hands-on experience, I love turning ideas into interactive and visually appealing digital experiences. I specialize in VS Code, Figma, Adobe XD, and Python, blending design and functionality to create seamless user experiences. Constantly exploring new technologies, I strive to build innovative and efficient solutions that make an impact.
            </p>
          </div>
          <div className="expertise--container">
            <div className="expertise--item">
              <img src="/img/react.png" alt="React Expertise" className="expertise--img" />
              <p className="expertise--name">React</p>
            </div>
            <div className="expertise--item">
              <img src="/img/3.png" alt="Figma Expertise" className="expertise--img" />
              <p className="expertise--name">Figma</p>
            </div>
            <div className="expertise--item">
              <img src="/img/2.png" alt="Adobe XD Expertise" className="expertise--img" />
              <p className="expertise--name">Adobe XD</p>
            </div>
            <div className="expertise--item">
              <img src="/img/7.png" alt="Python Expertise" className="expertise--img" />
              <p className="expertise--name">Python</p>
            </div>
          </div>
        </div>
      </section>
    );
  }