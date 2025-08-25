// الانتظار حتى تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    
    // شريط التحميل
    const loadingBar = document.querySelector('.loading-bar');
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            loadingBar.style.opacity = '0';
            setTimeout(() => {
                loadingBar.style.display = 'none';
            }, 300);
        } else {
            width += 5;
            loadingBar.style.width = width + '%';
        }
    }, 100);
    
    // تبديل القائمة في الموبايل
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    });
    
    // إغلاق القائمة عند النقر على رابط
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navigation.classList.remove('active');
        });
    });
    
    // إظهار وإخفاء زر العودة للأعلى
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('active');
            document.querySelector('header').classList.add('scrolled');
        } else {
            scrollToTopBtn.classList.remove('active');
            document.querySelector('header').classList.remove('scrolled');
        }
    });
    
    // العودة إلى الأعلى عند النقر على الزر
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // تأثيرات التمرير للعناصر
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .project-card, .contact-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // تهيئة العناصر المخفية
    const hiddenElements = document.querySelectorAll('.service-card, .project-card, .contact-card');
    hiddenElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s ease';
    });
    
    // تفعيل تأثيرات التمرير
    window.addEventListener('scroll', animateOnScroll);
    // تشغيل مرة واحدة عند التحميل
    animateOnScroll();
    
    // تأثير الكتابة للعنوان
    const jobTitle = document.querySelector('.job-title');
    const text = jobTitle.textContent;
    jobTitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            jobTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            jobTitle.querySelector('.typing-animation').style.borderRight = 'none';
        }
    }
    
    // بدء تأثير الكتابة بعد تأخير بسيط
    setTimeout(typeWriter, 1500);
    
    // ========== إضافة ميزة تبديل اللغة ==========
    const languageToggle = document.getElementById('language-toggle');
    const langText = document.querySelector('.lang-text');
    let currentLanguage = 'ar';
    
    // نصوص الترجمة
    const translations = {
        'ar': {
            'home': 'الرئيسية',
            'services': 'خدماتي',
            'projects': 'مشاريعي',
            'contact': 'اتصل بي',
            'welcome': 'مرحباً، أنا',
            'jobTitle': 'Prpgram Full Stack',
            'intro': 'أقوم بتحويل أفكارك إلى مواقع ويب رائعة وتطبيقات مذهلة تلبي احتياجاتك وتفوق توقعاتك.',
            'viewWork': 'استعرض أعمالي',
            'scroll': 'قم بالتمرير لأسفل',
            'servicesTitle': 'خدماتي',
            'service1Title': 'تطوير المواقع',
            'service1Desc': 'أقوم بإنشاء مواقع ويب متجاوبة وسريعة باستخدام أحدث التقنيات لضمان تجربة مستخدم متميزة.',
            'service2Title': 'تطبيقات الجوال',
            'service2Desc': 'تصميم وتطوير تطبيقات جوال مبتكرة وسلسة تعمل على مختلف المنصات والأجهزة.',
            'service3Title': 'تصميم واجهات المستخدم',
            'service3Desc': 'تصميم واجهات مستخدم جذابة وسهلة الاستخدام تركز على تجربة المستخدم وتحقيق الأهداف.',
            'projectsTitle': 'مشاريعي',
            'viewProject': 'عرض المشروع',
            'contactTitle': 'اتصل بي',
            'phone': 'هاتف',
            'email': 'بريد إلكتروني',
            'location': 'موقعي',
            'namePlaceholder': 'اسمك',
            'emailPlaceholder': 'بريدك الإلكتروني',
            'messagePlaceholder': 'رسالتك',
            'sendMessage': 'إرسال الرسالة',
            'rights': 'جميع الحقوق محفوظة'
        },
        'en': {
            'home': 'Home',
            'services': 'Services',
            'projects': 'Projects',
            'contact': 'Contact',
            'welcome': 'Hello, I am Azam',
            'jobTitle': 'Full Stack Developer',
            'intro': 'I transform your ideas into amazing websites and stunning applications that meet your needs and exceed your expectations.',
            'viewWork': 'View My Work',
            'scroll': 'Scroll Down',
            'servicesTitle': 'My Services',
            'service1Title': 'Web Development',
            'service1Desc': 'I create responsive and fast websites using the latest technologies to ensure an exceptional user experience.',
            'service2Title': 'Mobile Applications',
            'service2Desc': 'Design and develop innovative and smooth mobile applications that work on various platforms and devices.',
            'service3Title': 'UI/UX Design',
            'service3Desc': 'Design attractive and easy-to-use user interfaces that focus on user experience and achieving goals.',
            'projectsTitle': 'My Projects',
            'viewProject': 'View Project',
            'contactTitle': 'Contact Me',
            'phone': 'Phone',
            'email': 'Email',
            'location': 'Location',
            'namePlaceholder': 'Your Name',
            'emailPlaceholder': 'Your Email',
            'messagePlaceholder': 'Your Message',
            'sendMessage': 'Send Message',
            'rights': 'All Rights Reserved'
        }
    };
    
    // تبديل اللغة
    function toggleLanguage() {
        currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
        
        // تغيير اتجاه الصفحة
        document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLanguage;
        
        // تحديث النصوص
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[currentLanguage][key]) {
                if (element.placeholder) {
                    element.placeholder = translations[currentLanguage][key];
                } else {
                    element.textContent = translations[currentLanguage][key];
                }
            }
        });
        
        // تحديث نص زر اللغة
        langText.textContent = currentLanguage === 'ar' ? 'EN' : 'AR';
        
        // حفظ التفضيل في localStorage
        localStorage.setItem('language', currentLanguage);
    }
    
    // تحميل اللغة المحفوظة
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        if (currentLanguage === 'en') {
            toggleLanguage(); // التبديل إلى الإنجليزية إذا كانت محفوظة
        }
    }
    
    // إضافة event listener لزر اللغة
    languageToggle.addEventListener('click', toggleLanguage);
    
    // ========== إضافة ميزة الوضع الليلي ==========
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    let isDarkMode = false;
    
    // تبديل الوضع الليلي
    function toggleTheme() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            document.body.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        
        // حفظ التفضيل في localStorage
        localStorage.setItem('darkMode', isDarkMode);
    }
    
    // تحميل الوضع المحفوظ
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        isDarkMode = true;
        toggleTheme(); // التبديل إلى الوضع الليلي إذا كان محفوظاً
    }
    
    // إضافة event listener لزر الوضع الليلي
    themeToggle.addEventListener('click', toggleTheme);
});