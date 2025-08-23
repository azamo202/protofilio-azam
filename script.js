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
            const screenPosition = window.innerHeight / 1.5;
            
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
});