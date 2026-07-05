import React from 'react';

function Projects() {
  const projects = [
    {
      img: 'images/chrome_U19qym04kW.jpg',
      title: 'منصة متكاملة لبيع الأراضي وعرض المزادات',
      category: 'منصة إلكترونية مبتكرة متخصصة في عرض، بيع وتسويق الأراضي الكبرى والعقارات الاستثمارية داخل المملكة العربية السعودية',
      link: 'https://youtu.be/Z_J0D5xqnOI'
    },
    {
      img: 'images/Screenshot 2025-08-24 113804.png',
      title: 'متجر الكتروني لمحلات النجوم',
      category: 'تصميم ويب يتيح للمستخدم الحجز والشراء عن طريق الموقع',
      link: 'https://youtu.be/ESqF6-whSvk?si=b_RQwSxT7EJiGPZx'
    },
    {
      img: 'images/Screenshot 2025-09-22 113956.png',
      title: 'موقع تفاعلي لمحلات شهد البساتين',
      category: 'موقع بتصميم جذاب وتصميم عصري وبتجربة مستخدم بسيطة جدا وسلسة',
      link: 'https://youtu.be/a7oPoHzNDq8?si=sIajWYUuMiAaYHaZ'
    },
    {
      img: 'images/Screenshot 2025-08-24 113143.png',
      title: 'تطبيق بصمة تواجد',
      category: 'تطبيق للتحضير عن طريق الموقع الجغرافي والبصمة عن طريق الهاتف',
      link: 'Pdf/تطبيق بصمة تواجد.pdf'
    },
    {
      img: 'images/Screenshot 2025-08-24 113609.png',
      title: 'لوحة تحكم خاصه للمتجر الالكتروني',
      category: 'داش بورد لإضافة المنتجات والطلبات والرؤية العامة للمتجر',
      link: 'https://youtu.be/dKalddQyrL0?si=luThYOZfZlUXWuVp'
    },
    {
      img: 'images/Screenshot 2025-08-24 113333.png',
      title: 'لوحة تحكم لتطبيق بصمة تواجد',
      category: 'داش بورد لإدارة تطبيق الحضور والانصراف',
      link: 'https://youtu.be/MlfjU7ssoic?si=I6QwZM-ECKQ2J-5P'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title scroll-reveal">مشاريعي</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card scroll-reveal" key={index}>
              <div className="project-image">
                <img
                  src={project.img}
                  alt={project.title}
                />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >عرض المشروع</a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
