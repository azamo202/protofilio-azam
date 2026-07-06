import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header-wrapper scroll-reveal">
          <h2 className="section-title">اتصل بي</h2>
          <p className="section-subtitle">لنتواصل ونصنع الفارق</p>
        </div>
        
        <div className="contact-wrapper scroll-reveal">
          <div className="contact-info-card glass-panel-premium">
            <div className="contact-info-content">
              <h3 className="contact-info-title">لنتحدث معاً <span className="wave-emoji">👋</span></h3>
              <p className="contact-info-desc">أنا دائماً منفتح لمناقشة أفكار جديدة، أو تقديم الاستشارات لمشاريعك القادمة.</p>
              
              <div className="contact-methods">
                <a href="https://wa.me/967781560010" target="_blank" rel="noopener noreferrer" className="contact-item glow-hover-primary" style={{textDecoration: 'none', color: 'inherit', display: 'flex'}}>
                  <div className="contact-icon-box">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div className="contact-item-details">
                    <h4>واتساب</h4>
                    <p dir="ltr" className="gradient-text">+967 781560010</p>
                  </div>
                </a>
                
                <a href="mailto:azoz20113040@gmail.com" className="contact-item glow-hover-accent" style={{textDecoration: 'none', color: 'inherit', display: 'flex'}}>
                  <div className="contact-icon-box">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="contact-item-details">
                    <h4>بريد إلكتروني</h4>
                    <p className="gradient-text">azoz20113040@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Decorative background elements for the info card */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
          </div>

          <div className="contact-form-card glass-panel-premium">
            <form className="contact-form" action="https://formspree.io/f/mdaaedgb" method="POST">
              <div className="form-group floating-label-group">
                <input type="text" name="name" id="name" className="form-input floating-input" placeholder=" " required />
                <label htmlFor="name" className="floating-label">الاسم الكامل</label>
                <div className="input-highlight"></div>
              </div>
              
              <div className="form-group floating-label-group">
                <input type="email" name="_replyto" id="email" className="form-input floating-input" placeholder=" " required />
                <label htmlFor="email" className="floating-label">البريد الإلكتروني</label>
                <div className="input-highlight"></div>
              </div>
              
              <div className="form-group floating-label-group">
                <textarea name="message" id="message" className="form-input floating-input" rows="5" placeholder=" " required></textarea>
                <label htmlFor="message" className="floating-label">اكتب رسالتك هنا...</label>
                <div className="input-highlight"></div>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn animated-btn">
                <span>إرسال الرسالة</span>
                <i className="fa-solid fa-paper-plane send-icon"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
