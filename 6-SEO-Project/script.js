 // Sticky header shadow on scroll
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
 
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');
 
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
 
    // Close nav when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
 
    // Form submission handler
    function handleSubmit() {
      const name  = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg   = document.getElementById('message').value.trim();
 
      if (!name || !email || !msg) {
        alert('Please fill in all required fields.');
        return;
      }
 
      const btn = document.getElementById('submitBtn');
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#3D200A';
      btn.disabled = true;
 
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        btn.disabled = false;
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
      }, 3000);
    }
 
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
 
    // Intersection Observer — fade-in cards on scroll
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