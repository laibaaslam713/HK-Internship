
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
 
    
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');
 
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
 
    
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
 
    
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
 
    const cards = document.querySelectorAll('.service-card, .portfolio-item');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeSlideUp 0.5s ease both';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
 
    cards.forEach(card => observer.observe(card));