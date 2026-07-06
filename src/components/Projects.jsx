import React from 'react';

function Projects() {
  const projects = [
    {
      img: 'images/hadiyah.png',
      title: 'منصة هدية للتخطيط الإستراتيجي',
      category: 'منصة ويب احترافية متخصصة في إدارة ومتابعة تنفيذ الخطط الاستراتيجية والتشغيلية، صُممت لتمكين المؤسسات والجمعيات من تحويل أهدافها الاستراتيجية إلى مشاريع تشغيلية قابلة للمتابعة والقياس، مع توفير لوحة تحكم تفاعلية تساعد الإدارة العليا على مراقبة الأداء واتخاذ القرارات المبنية على البيانات.',
      link: 'https://had-rust.vercel.app/'
    },
    {
      img: 'images/chranico.png',
      title: 'موقع كيان المستقبل لعرض منتجات البورسلان',
      category: 'موقع إلكتروني احترافي صُمم ليكون واجهة رقمية متكاملة لعرض منتجات البورسلان والسيراميك ومواد التشطيب بطريقة عصرية وسهلة الاستخدام. ركز المشروع على إبراز المنتجات بأسلوب احترافي يعكس هوية الشركة، مع توفير تجربة تصفح سلسة تساعد العملاء على استعراض التصنيفات المختلفة والوصول إلى المنتجات بسرعة.',
      link: 'https://futurekayan.net/'
    },
    {
      img: 'images/Gemini_Generated_Image_8fxdnm8fxdnm8fxd-compressed.png',
      title: 'منصة فنجال',
      category: 'منصة إلكترونية احترافية تعكس مفهوم الضيافة السعودية الأصيلة، صُممت لتقديم تجربة مستخدم عصرية تجمع بين الهوية التراثية والتقنيات الحديثة. ركز المشروع على بناء واجهة جذابة وسريعة الاستجابة تبرز المحتوى والخدمات بطريقة احترافية، مع المحافظة على الهوية البصرية والعناصر الثقافية التي تمثل علامة "فنجال',
      link: 'https://fanjal.com/'
    },
    {
      img: 'images/Gemini_Generated_Image_58bfq058bfq058bf-compressed.webp',
      title: 'موقع الإستشارات الإدارية لشركة سيفان العقارية',
      category: 'منصة وموقع إلكتروني احترافي تم تطويره ليعكس هوية شركة سايفان للاستشارات التقنية ويقدم خدماتها في مجال الاستشارات التقنية، تطوير الأنظمة، الحلول الرقمية، وإدارة المشاريع التقنية. يهدف الموقع إلى عرض خدمات الشركة بطريقة واضحة ومنظمة تساعد العملاء على فهم نطاق العمل والتواصل بسهولة مع فريق الاستشارات.',
      link: 'https://consulting.saivan.sa/'
    },
    {
      img: 'images/Gemini_Generated_Image_vgz55wvgz55wvgz5-compressed.jpeg',
      title: 'متجر إالكتروني لشركة جراني العامة للاستيراد والتصدير',
      category: 'موقع إلكتروني تجاري احترافي صُمم ليكون منصة لعرض وبيع منتجات متنوعة مع التركيز على تقديم تجربة تسوق حديثة وسهلة الاستخدام. يهدف المشروع إلى تمكين المستخدمين من تصفح المنتجات عبر أقسام منظمة، واستعراض التفاصيل والصور بطريقة جذابة تعزز قرار الشراء.',
      link: 'https://www.chranico.com/'
    },
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
    },
    {
      img: 'images/Gemini_Generated_Image_tgpi6etgpi6etgpi.png',
      title: 'موقع سيكوريت الرياض لبيع الزجاج',
      category: 'منصة ويب تفاعلية مخصصة لتوفير تجربة قراءة رقمية بسيطة وسلسة، تتيح للمستخدمين الوصول إلى محتوى مكتوب وقراءته عبر واجهة حديثة وخفيفة تعمل مباشرة من المتصفح دون الحاجة إلى تثبيت أي تطبيقات.',
      link: 'https://secret-readh.netlify.app/'
    }
  ];

  const getHostname = (link) => {
    try {
      return new URL(link).hostname;
    } catch (e) {
      return 'portfolio.local';
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title scroll-reveal">مشاريعي</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card browser-mockup scroll-reveal" key={index}>
              <div className="browser-header">
                <div className="mac-dots">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
                <div className="browser-url-bar en-text">
                  <i className="fa-solid fa-lock lock-icon"></i>
                  <span>{getHostname(project.link)}</span>
                </div>
              </div>
              <div className="browser-body project-image-container">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    عرض المشروع <i className="fa-solid fa-arrow-up-right-from-square" style={{marginLeft: '8px', fontSize: '0.8rem'}}></i>
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

export default Projects;
