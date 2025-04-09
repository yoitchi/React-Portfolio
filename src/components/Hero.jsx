import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--container">
        <div className="hero--section--img">
          <img src="./img/hero_img.jpg" alt="Hero Section" />
        </div>
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm John Bldimir</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Web</span> Developer
            </h1>
            <div className="social--icons">
              <a href="https://www.linkedin.com/in/yoitchi-hiruma-185600359/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/yoitchi" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100072487254074" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/yoitchi_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}