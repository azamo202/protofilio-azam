import React from 'react';

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title scroll-reveal">خدماتي</h2>
        <div className="services-grid">
          <div className="service-card scroll-reveal">
            <div className="service-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <h3 className="service-title">تطوير المواقع</h3>
            <p className="service-description">
              أقوم بإنشاء مواقع ويب متجاوبة وسريعة باستخدام أحدث التقنيات لضمان
              تجربة مستخدم متميزة.
            </p>
          </div>
          <div className="service-card scroll-reveal">
            <div className="service-icon">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <h3 className="service-title">تطبيقات الجوال</h3>
            <p className="service-description">
              تصميم وتطوير تطبيقات جوال مبتكرة وسلسة تعمل على مختلف المنصات
              والأجهزة.
            </p>
          </div>
          <div className="service-card scroll-reveal">
            <div className="service-icon">
              <i className="fa-solid fa-palette"></i>
            </div>
            <h3 className="service-title">تصميم واجهات المستخدم</h3>
            <p className="service-description">
              تصميم واجهات مستخدم جذابة وسهلة الاستخدام تركز على تجربة المستخدم
              وتحقيق الأهداف.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
