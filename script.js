    // إنشاء الجسيمات
      function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          particle.style.left = Math.random() * 100 + '%';
          particle.style.top = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 20 + 's';
          particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
          particlesContainer.appendChild(particle);
        }
      }

      // تفعيل القائمة المحمولة
      const menuToggle = document.getElementById('menu-toggle');
      const navigation = document.getElementById('navigation');
      const navLinks = document.querySelectorAll('.nav-link');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
      });

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          menuToggle.classList.remove('active');
          navigation.classList.remove('active');
          
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        });
      });

      // تأثير التمرير
      const header = document.getElementById('header');
      const scrollToTop = document.getElementById('scrollToTop');
      const loadingBar = document.querySelector('.loading-bar');

      window.addEventListener('scroll', () => {
        // تأثير الهيدر
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
          scrollToTop.classList.add('visible');
        } else {
          header.classList.remove('scrolled');
          scrollToTop.classList.remove('visible');
        }

        // شريط التحميل
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        loadingBar.style.width = scrolled + '%';

        // تفعيل الروابط حسب القسم
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
              }
            });
          }
        });
      });

      // زر العودة للأعلى
      scrollToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      // تأثير الظهور عند التمرير
      const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

      const revealOnScroll = () => {
        scrollRevealElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementTop < windowHeight - 100) {
            element.classList.add('active');
          }
        });
      };

      window.addEventListener('scroll', revealOnScroll);
      revealOnScroll();

      // التمرير السلس للروابط
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
      // تهيئة الصفحة
      createParticles();
