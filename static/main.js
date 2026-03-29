/* =====================================================
   PORTFOLIO — Main JavaScript v2.0
   Handles:
     1. Navbar scroll effects & mobile toggle
     2. Typing animation (replaces Typed.js)
     3. Scroll-reveal observer
     4. Skill bar animations
     5. Active nav highlighting
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------
     1. NAVBAR — Scroll glass effect & active link highlight
     ------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  // Add .scrolled class when page scrolls past 60px
  function handleNavScroll() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // run on load

  // Highlight current page link
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPage = href.replace('./', '').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  setActiveNavLink();

  // Mobile nav toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      if (navOverlay) navOverlay.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking overlay
    if (navOverlay) {
      navOverlay.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }


  /* -------------------------------------------------------
     2. TYPING ANIMATION — No external library needed
     ------------------------------------------------------- */
  const typedElement = document.getElementById('typed');
  const typedStrings = document.getElementById('typed-strings');

  if (typedElement && typedStrings) {
    const strings = [];
    typedStrings.querySelectorAll('span').forEach(span => {
      strings.push(span.textContent.trim());
    });

    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 60;       // ms per character when typing
    const deleteSpeed = 35;     // ms per character when deleting
    const pauseAfterType = 2000; // pause after full string typed
    const pauseAfterDelete = 500;

    // Create cursor element
    const cursor = document.createElement('span');
    cursor.id = 'typed-cursor';
    typedElement.parentNode.insertBefore(cursor, typedElement.nextSibling);

    function typeLoop() {
      const current = strings[stringIndex];
      if (!current) return;

      if (!isDeleting) {
        // Typing forward
        typedElement.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
          // Finished typing — pause then start deleting
          isDeleting = true;
          setTimeout(typeLoop, pauseAfterType);
          return;
        }
        setTimeout(typeLoop, typeSpeed);
      } else {
        // Deleting
        typedElement.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          // Finished deleting — move to next string
          isDeleting = false;
          stringIndex = (stringIndex + 1) % strings.length;
          setTimeout(typeLoop, pauseAfterDelete);
          return;
        }
        setTimeout(typeLoop, deleteSpeed);
      }
    }

    // Start after a small delay
    setTimeout(typeLoop, 800);
  }


  /* -------------------------------------------------------
     3. SCROLL-REVEAL — IntersectionObserver animations
     ------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optionally stop observing after reveal
          // revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }


  /* -------------------------------------------------------
     4. SKILL BAR ANIMATION — Animates width on scroll
     ------------------------------------------------------- */
  const skillItems = document.querySelectorAll('.skill-item');

  if (skillItems.length > 0) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.3
    });

    skillItems.forEach(item => skillObserver.observe(item));
  }


  /* -------------------------------------------------------
     5. RESUME PAGE — Download + fallback logic
     ------------------------------------------------------- */
  const downloadBtns = document.querySelectorAll('.btn-download-resume');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pdfUrl = './static/assets/resume.pdf';
      const fileName = 'Sai_Lakshman_Resume.pdf';

      fetch(pdfUrl)
        .then(res => {
          if (!res.ok) throw new Error('PDF not found');
          return res.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        })
        .catch(() => {
          window.open(pdfUrl, '_blank');
        });
    });
  });

  // Mobile PDF fallback
  const iframe = document.getElementById('resume-iframe');
  const fallback = document.getElementById('resume-fallback');
  if (iframe && fallback) {
    iframe.addEventListener('error', () => {
      iframe.style.display = 'none';
      fallback.style.display = 'block';
    });

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      iframe.style.display = 'none';
      fallback.style.display = 'block';
    }
  }


  /* -------------------------------------------------------
     6. SMART SMOOTH SCROLL — Intercept nav & logo clicks
     If the link points to the CURRENT page, smooth-scroll to
     the top instead of reloading. Cross-page links navigate
     normally. Anchor links (#) always smooth-scroll.
     ------------------------------------------------------- */

  /**
   * Checks if two URLs resolve to the same page.
   * Compares only the pathname, ignoring query strings & hashes.
   */
  function isSamePage(href) {
    if (!href) return false;
    // Build a full URL from the href (handles relative paths like "./index.html")
    const linkUrl = new URL(href, window.location.origin + window.location.pathname);
    const currentPath = window.location.pathname;
    // Normalise: strip trailing slash then compare
    const link = linkUrl.pathname.replace(/\/+$/, '') || '/';
    const current = currentPath.replace(/\/+$/, '') || '/';
    return link === current;
  }

  /**
   * Smoothly scrolls to the very top of the page.
   */
  function smoothScrollToTop() {
    // Prefer scrolling the hero section into view if it exists
    const hero = document.getElementById('hero') || document.querySelector('.hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // --- Logo click: always scroll to top on current page ---
  const navBrand = document.querySelector('.nav-brand');
  if (navBrand) {
    navBrand.addEventListener('click', function (e) {
      if (isSamePage(this.getAttribute('href'))) {
        e.preventDefault();
        smoothScrollToTop();
      }
      // If on a different page, let the browser navigate normally
    });
  }

  // --- Nav links: intercept same-page clicks ---
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (isSamePage(href)) {
        e.preventDefault();
        smoothScrollToTop();
      }
      // Cross-page links navigate normally (no preventDefault)
    });
  });

  // --- Anchor links (#something): always smooth-scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* -------------------------------------------------------
     7. PREMIUM PARALLAX HERO EFFECT
     Subtle mouse-interactive tilt and translate using lerp.
     ------------------------------------------------------- */
  const heroSection = document.getElementById('hero');
  // Target the high-res nebula video for smooth parallax 
  const heroBgMedia = document.getElementById('hero-bg-video') || document.getElementById('hero-bg-img');
  const heroContent = document.querySelector('.hero-content');
  const heroCtaWrapper = document.querySelector('.hero-cta');

  // Verify non-touch device for safe hovering
  if (heroSection && window.matchMedia("(hover: hover)").matches) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;
    
    // Smoothing factor (0.1 means 10% movement per frame)
    const ease = 0.08;
    
    // Record relative mouse displacements continuously
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      // Center of the section
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Normalized offset (-1 to 1) 
      mouseX = (e.clientX - centerX) / (rect.width / 2);
      mouseY = (e.clientY - centerY) / (rect.height / 2);
      
      // Ignite the animation loop if it's halted
      if (!rafId) {
        rafId = requestAnimationFrame(animateParallax);
      }
    });
    
    // Gently reset offsets when the cursor exits the hero territory
    heroSection.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
    });

    // The rendering lerp loop utilizing requestAnimationFrame cleanly
    function animateParallax() {
      // Interpolate current pos towards target pos
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;
      
      // If we are extremely close to 0, halt loop to save CPU footprint
      if (Math.abs(mouseX) < 0.001 && Math.abs(currentX) < 0.001 &&
          Math.abs(mouseY) < 0.001 && Math.abs(currentY) < 0.001) {
        currentX = 0;
        currentY = 0;
        applyTransforms();
        cancelAnimationFrame(rafId);
        rafId = null;
        return;
      }
      
      applyTransforms();
      rafId = requestAnimationFrame(animateParallax);
    }
    
    function applyTransforms() {
      // 1. Background image moves slowly reversed (e.g. up to ±2px)
      if (heroBgMedia) {
        heroBgMedia.style.transform = `scale(1.04) translate(${currentX * -2}px, ${currentY * -2}px)`;
      }
      
      // 2. Main content moves naturally aligned (e.g. up to ±3.5px)
      if (heroContent) {
        // Subtle depth panning
        heroContent.style.transform = `translate(${currentX * 3.5}px, ${currentY * 3.5}px)`;
        
        // Pass normalized values (-1 to 1) via CSS to govern the responsive light glow directly
        // Shift percentage from 50% base offset up and down by limits 
        heroContent.style.setProperty('--glow-x', `${50 + (currentX * 20)}%`);
        heroContent.style.setProperty('--glow-y', `${50 + (currentY * 20)}%`);
      }
      
      // 3. CTA Buttons pop outwards adding parallax dimension (e.g. overall ±5.5px)
      if (heroCtaWrapper) {
        // Modifying the direct parent so individual .btn:hover behaviors remain entirely flawless
        heroCtaWrapper.style.transform = `translate(${currentX * 2}px, ${currentY * 2}px)`;
      }
    }
  }

});
