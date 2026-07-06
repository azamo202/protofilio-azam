import React from 'react';

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title scroll-reveal">خدماتي</h2>
        <div className="services-bento-grid">
          
          <div className="service-card bento-span-2 scroll-reveal glass-panel">
            <div className="service-icon-wrapper glow-blue">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="service-content">
              <h3 className="service-title">تطوير المواقع وتطبيقات الويب</h3>
              <p className="service-description">
                أقوم بإنشاء مواقع ويب متجاوبة وسريعة وتطبيقات ويب متكاملة (Full Stack) باستخدام أحدث التقنيات لضمان أداء عالٍ وتجربة مستخدم متميزة.
              </p>
            </div>
          </div>

          <div className="service-card scroll-reveal glass-panel">
            <div className="service-icon-wrapper glow-purple">
              <i className="fa-solid fa-server"></i>
            </div>
            <div className="service-content">
              <h3 className="service-title">تطوير النظم الخلفية (Backend)</h3>
              <p className="service-description">
                بناء أنظمة خلفية قوية وآمنة، وتطوير واجهات برمجة التطبيقات (APIs) لربط الأنظمة ببعضها.
              </p>
            </div>
          </div>

          <div className="service-card scroll-reveal glass-panel">
            <div className="service-icon-wrapper glow-emerald">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <div className="service-content">
              <h3 className="service-title">تطبيقات الجوال</h3>
              <p className="service-description">
                تصميم وتطوير تطبيقات جوال مبتكرة وسلسة تعمل على مختلف المنصات والأجهزة.
              </p>
            </div>
          </div>

          <div className="service-card bento-span-2 scroll-reveal glass-panel">
            <div className="service-icon-wrapper glow-pink">
              <i className="fa-solid fa-palette"></i>
            </div>
            <div className="service-content">
              <h3 className="service-title">تصميم واجهات المستخدم (UI/UX)</h3>
              <p className="service-description">
                تصميم واجهات مستخدم جذابة وسهلة الاستخدام تركز على تجربة المستخدم، معتمدًا على أسس علمية لتحقيق أفضل تجربة.
              </p>
            </div>
          </div>

          <div className="service-card scroll-reveal glass-panel">
            <div className="service-icon-wrapper glow-yellow">
              <i className="fa-solid fa-database"></i>
            </div>
            <div className="service-content">
              <h3 className="service-title">إدارة قواعد البيانات</h3>
              <p className="service-description">
                تصميم وهيكلة قواعد البيانات، وإدارة الخوادم لضمان استقرار وأمان وسلامة البيانات.
              </p>
            </div>
          </div>

          <div className="service-card scroll-reveal glass-panel">
            <div className="service-icon-wrapper glow-cyan">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <div className="service-content">
              <h3 className="service-title">تحسين الأداء و SEO</h3>
              <p className="service-description">
                تحسين سرعة تحميل المواقع، وكتابة كود نظيف لتهيئة المواقع لتصدر نتائج البحث المتقدمة.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
