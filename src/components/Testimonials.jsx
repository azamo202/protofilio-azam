import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      link: 'https://mostaql.com/u/azamosafani/reviews/8728155',
      avatar: 'A',
      name: 'Aisha M.',
      platform: 'مستقل',
      icon: 'fas fa-briefcase',
      rating: 5,
      text: 'حرص على اتقان العمل - صبر على التعديلات وإن طالت - تعامل راقي',
      date: 'منذ 8 أشهر و 18 يوما'
    },
    {
      link: 'https://mostaql.com/u/azamosafani/reviews/8807840',
      avatar: 'م',
      name: 'محمد ع.',
      platform: 'مستقل',
      icon: 'fas fa-briefcase',
      rating: 5,
      text: 'الاستاذ عزام انا فعلا سعيد بالتعامل معاك مثالا للاحترافية والانضباط بالعمل وكان لى كل الشرف بالتعامل معك واكيد باذن الله سيكون هناك تعاملات اخرى',
      date: 'منذ 7 أشهر و 10 أيام'
    },
    {
      link: 'https://mostaql.com/u/azamosafani/reviews/9215303',
      avatar: 'M',
      name: 'Mshari A.',
      platform: 'مستقل',
      icon: 'fas fa-briefcase',
      rating: 5,
      text: 'ماشاء الله تبارك الله شكر وتقدير للمهندس عزام .. رجل بمعنى الكلمة واحترافية في الاداء انصح بالتعامل معه وبقوة',
      date: 'منذ شهرين و 6 أيام'
    },
    {
      link: 'https://mostaql.com/u/azamosafani/reviews/9381946',
      avatar: 'M',
      name: 'Mshari A.',
      platform: 'مستقل',
      icon: 'fas fa-briefcase',
      rating: 5,
      text: 'وفقك الله سعادة المهندس وشاااكر ومقدر تعاونك واهتمامك',
      date: 'منذ شهر و 12 أيام'
    },
    {
      link: 'https://mostaql.com/u/azamosafani/reviews/9489146',
      avatar: 'M',
      name: 'Mshari A.',
      platform: 'مستقل',
      icon: 'fas fa-briefcase',
      rating: 5,
      text: 'ماشاء الله تبارك الله .... من افضل المبرمجين فعلا وفقك الله مهندس عزام',
      date: 'منذ 13 يوما و 15 ساعة'
    },
    {
      link: 'https://khamsat.com/user/azamo2030/reviews/1107544',
      avatar: 'N',
      name: '.Nnnnnn N',
      platform: 'خمسات',
      icon: 'fas fa-briefcase',
      rating: 5,
      text: 'ماشاءالله فنان',
      date: 'منذ شهر و14 يوم'
    },
    {
      link: 'https://mostaql.com/u/azamosafani/reviews/9522423',
      avatar: 'N',
      name: 'Mshari A.',
      platform: 'مستقل',
      icon: 'fas fa-briefcase',
      rating: 5,
      text: 'ماشاء الله تبارك الله متمكن في تنفيذ الاعمال وفقه الله',
      date: 'منذ يوم'
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title scroll-reveal">آراء العملاء</h2>
        <div className="testimonials-wrapper">
          {testimonials.map((test, index) => (
            <a
              key={index}
              href={test.link}
              target="_blank"
              rel="noopener noreferrer"
              className="testimonial-card scroll-reveal"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">{test.avatar}</div>
                <div className="testimonial-info">
                  <h4>{test.name}</h4>
                  <div className="testimonial-platform">
                    <span className="platform-badge">
                      <i className={test.icon}></i>
                      {' '}{test.platform}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(test.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star star"></i>
                ))}
              </div>
              <p className="testimonial-text">{test.text}</p>
              <div className="testimonial-date">
                <i className="far fa-clock"></i> {test.date}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
