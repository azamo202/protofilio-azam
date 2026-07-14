import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink('#' + sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveLink(href);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header id="header" className={isScrolled ? 'scrolled glass' : 'glass'}>
        <a href="#" className="logo text-gradient en-text" onClick={(e) => handleLinkClick(e, '#home')}>AZAM</a>
        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`} id="navigation">
          {[
            { href: '#home', text: 'الرئيسية' },
            { href: '#services', text: 'خدماتي' },
            { href: '#projects', text: 'مشاريعي' },
            { href: '#certificates', text: 'شهاداتي' },
            { href: '#testimonials', text: 'آراء العملاء' },
            { href: '#contact', text: 'اتصل بي' }
          ].map(link => (
            <a 
              key={link.href}
              href={link.href} 
              className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.text}
            </a>
          ))}
        </nav>
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          id="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  );
}

export default Header;
