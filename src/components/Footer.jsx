import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; 2026 <span>جميع الحقوق محفوظة</span>
          <span>عزام الصعفاني</span>
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/azam-al-safani-77b0412a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          ><i className="fa-brands fa-linkedin-in"></i></a>
          <a
            href="http://wa.me/967781560010"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          ><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
