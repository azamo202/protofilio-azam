import React from 'react';

function Hero() {
  return (
    <section className="main" id="home">
      <div className="content">
        <h2 className="welcome-text">مرحباً، أنا <span className="name">عزام</span></h2>
        <h1 className="job-title">
          <span className="typing-animation">Full Stack Developer</span>
        </h1>
        <p className="intro">
          أقوم بتحويل أفكارك إلى مواقع ويب رائعة وتطبيقات مذهلة تلبي احتياجاتك
          وتفوق توقعاتك.
        </p>
        <a href="#projects" className="main-button">استعرض أعمالي</a>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/azam-al-safani-77b0412a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            ><i className="fa-brands fa-linkedin-in"></i
          ></a>
          
          <a
            href="http://wa.me/967781560010"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            ><i className="fa-brands fa-whatsapp"></i
          ></a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>قم بالتمرير لأسفل</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}

export default Hero;
