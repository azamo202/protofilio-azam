import React from 'react';

function Certificates() {
  const certificates = [
    {
      img: 'images/Screenshot 2025-08-31 104711.png',
      title: 'Fundamentals of Digital Marketing',
      category: 'الجهة: Google Digital Garage | تاريخ الإكمال: October 13, 2024',
      link: 'images/Screenshot 2025-08-31 104711.png'
    },
    {
      img: 'images/Screenshot 2025-08-31 104109.png',
      title: 'Introduction to Mobile App Development',
      category: 'الجهة: IBM (عبر Coursera) | تاريخ الإصدار: December 8, 2024',
      link: 'images/Screenshot 2025-08-31 104109.png'
    },
    {
      img: 'images/images__9_-removebg-preview.png',
      title: 'بكالوريوس تقنية المعلومات (IT)',
      category: 'الجهة: جامعة العلوم الحديثة | نوع الشهادة: بكالوريوس | تاريخ التخرج: شهر 5 - 2025',
      link: 'images/images__9_-removebg-preview.png',
      isLogo: true
    },
    {
      img: 'images/Screenshot 2026-07-14 170355.png',
      title: 'Basics of Digital Marketing',
      category: 'الجهة: AlqadasiBiz | نوع الشهادة: Certificate of Attendance | تاريخ الدورة: 2 September 2022 | المدة: 3 Hours',
      link: 'images/Screenshot 2026-07-14 170355.png'
    }
  ];

  return (
    <section className="projects" id="certificates">
      <div className="container">
        <h2 className="section-title scroll-reveal">شهاداتي</h2>
        <div className="projects-grid">
          {certificates.map((cert, index) => (
            <div className="project-card browser-mockup scroll-reveal" key={index}>
              <div className="browser-header">
                <div className="mac-dots">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
                <div className="browser-url-bar en-text">
                  <i className="fa-solid fa-certificate lock-icon" style={{marginRight: '8px'}}></i>
                  <span>{cert.isLogo ? 'university-degree.pdf' : 'certificate.pdf'}</span>
                </div>
              </div>
              <div className="browser-body project-image-container" style={cert.isLogo ? { backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}}>
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="project-image"
                  style={cert.isLogo ? { objectFit: 'contain', padding: '2rem', height: '100%', width: '100%' } : {}}
                />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">{cert.title}</h3>
                    <p className="project-category">{cert.category}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    عرض الشهادة <i className="fa-solid fa-arrow-up-right-from-square" style={{marginLeft: '8px', fontSize: '0.8rem'}}></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
