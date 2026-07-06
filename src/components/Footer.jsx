import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#home" className="footer-logo text-gradient en-text">AZAM</a>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} <span className="name">عزام الصعفاني</span>. جميع الحقوق محفوظة.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/azam-al-safani-77b0412a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          ><i className="fa-brands fa-linkedin-in"></i></a>
          <a
            href="http://wa.me/967781560010"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          ><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
