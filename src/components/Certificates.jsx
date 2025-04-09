import React from "react";

function Certificates() {
  // Sample certificate data with 3 items (replace with your actual certificate details)
  const certificates = [
    {
      id: 1,
      src: "/img/skill.jpg", // Replace with your certificate image path
      title: "Certificate 1",
      downloadLink: "/certificates/certificate1.pdf", // Replace with your certificate PDF path
    },
    {
      id: 2,
      src: "/img/1.jpg", // Replace with your certificate image path
      title: "Certificate 2",
      downloadLink: "/certificates/certificate2.pdf", // Replace with your certificate PDF path
    },
    {
      id: 3,
      src: "/img/pfp.jpg", // Replace with your certificate image path
      title: "Certificate 3",
      downloadLink: "/certificates/certificate3.pdf", // Replace with your certificate PDF path
    },
  ];

  return (
    <section className="certificates--section" id="Certificates">
      <div className="certificates--container-box">
        <div className="certificates--container">
          <p className="sub--title">My Achievements</p>
          <h2 className="section--heading">Certificates</h2>
        </div>
      </div>
      <div className="certificates--section--container">
        {certificates.map((item) => (
          <div key={item.id} className="certificates--section--card">
            <div className="certificates--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="certificates--section--card--content">
              <h3 className="certificates--section--title">{item.title}</h3>
              <a
                href={item.downloadLink}
                download={`${item.title}.pdf`}
                className="certificates--download-btn"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;