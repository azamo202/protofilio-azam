import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title scroll-reveal">اتصل بي</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card scroll-reveal">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>هاتف</h3>
                <p dir="ltr">+967 781560010</p>
              </div>
            </div>
            <div className="contact-card scroll-reveal">
              <div className="contact-icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>بريد إلكتروني</h3>
                <p>azoz20113040@gmail.com</p>
              </div>
            </div>
            <div className="contact-card scroll-reveal">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-details">
                <h3>موقعي</h3>
                <p>اليمن</p>
              </div>
            </div>
          </div>

          <form className="contact-form scroll-reveal" action="https://formspree.io/f/mdaaedgb" method="POST">
            <label>
              اسمك:
              <input type="text" name="name" required />
            </label>
            <label>
              بريدك الإلكتروني:
              <input type="email" name="_replyto" required />
            </label>
            <label>
              رسالتك:
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button type="submit">إرسال الرسالة</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
