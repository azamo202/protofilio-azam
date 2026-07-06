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

  const glowColors = ['glow-blue', 'glow-purple', 'glow-emerald', 'glow-pink', 'glow-yellow', 'glow-cyan', 'glow-blue'];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header-wrapper scroll-reveal">
          <h2 className="section-title">آراء العملاء</h2>
          <p className="section-subtitle">كلمات نعتز بها من شركاء النجاح</p>
        </div>
        
        <div className="testimonials-masonry">
          {testimonials.map((test, index) => (
            <a
              key={index}
              href={test.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`testimonial-card scroll-reveal ${glowColors[index % glowColors.length]} ${index === 0 || index === 3 ? 'card-large' : ''}`}
              style={{ textDecoration: 'none', color: 'inherit', animationDelay: `${index * 0.1}s` }}
            >
              <div className="quote-mark-bg">
                <i className="fas fa-quote-right"></i>
              </div>
              
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {test.avatar}
                </div>
                <div className="testimonial-author">
                  <h4 className="author-name">{test.name}</h4>
                  <div className="testimonial-role">
                    <span className="platform-badge">
                      <i className={test.icon}></i>
                      {test.platform}
                    </span>
                  </div>
                </div>
                <div className="testimonial-stars">
                  {[...Array(test.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star star"></i>
                  ))}
                </div>
              </div>
              
              <div className="testimonial-body">
                <p className="testimonial-text">{test.text}</p>
              </div>
              
              <div className="testimonial-footer">
                <div className="testimonial-date">
                  <i className="far fa-clock"></i> {test.date}
                </div>
                <div className="view-project-btn">
                  <span>عرض التقييم</span>
                  <i className="fas fa-arrow-left"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
