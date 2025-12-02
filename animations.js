// JavaScript Animations Implementation
function initializeAnimations() {
  // Hero fade in animation
  animateHeroContent();

  // Shimmer effects for text
  animateShimmerEffects();

  // Card hover animations
  animateCardHovers();

  // Button animations
  animateButtonHovers();

  // WhatsApp pulse animation
  animateWhatsAppPulse();

  // Rotating background animation
  animateRotatingBackground();

  // Intersection Observer for scroll animations
  initializeScrollAnimations();
}

function animateHeroContent() {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(50px)';

    setTimeout(() => {
      heroContent.style.transition = 'all 2s ease-out';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }
}

function animateShimmerEffects() {
  // Shimmer for hero title
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    let shimmerPosition = 0;
    const shimmerInterval = setInterval(() => {
      shimmerPosition += 2;
      if (shimmerPosition > 100) shimmerPosition = -100;

      const gradientPosition = 50 + shimmerPosition;
      heroTitle.style.backgroundPosition = `${gradientPosition}% 50%`;
    }, 50);
  }

  // Shimmer for section titles
  const shimmerTitles = document.querySelectorAll('.servicios h2, .servicios-fotos h2');
  shimmerTitles.forEach(title => {
    let shimmerPosition = 0;
    const shimmerInterval = setInterval(() => {
      shimmerPosition += 1;
      if (shimmerPosition > 100) shimmerPosition = -100;

      const gradientPosition = 50 + shimmerPosition;
      title.style.backgroundPosition = `${gradientPosition}% 50%`;
    }, 100);
  });
}

function animateCardHovers() {
  // Service cards hover animations
  const serviceCards = document.querySelectorAll('.card-img');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      animateCardEnter(card);
    });

    card.addEventListener('mouseleave', () => {
      animateCardLeave(card);
    });
  });

  // Session cards hover animations
  const sessionCards = document.querySelectorAll('.servicios .card');
  sessionCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      animateSessionCardEnter(card);
    });

    card.addEventListener('mouseleave', () => {
      animateSessionCardLeave(card);
    });
  });
}

function animateCardEnter(card) {
  card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  card.style.transform = 'translateY(-15px) scale(1.03)';
  card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(138, 43, 226, 0.3), 0 0 30px rgba(138, 43, 226, 0.2)';

  const overlay = card.querySelector('.overlay');
  if (overlay) {
    const h3 = overlay.querySelector('h3');
    const p = overlay.querySelector('p');

    overlay.style.background = 'linear-gradient(135deg, rgba(138, 43, 226, 0.8) 0%, rgba(30, 144, 255, 0.6) 50%, rgba(255, 20, 147, 0.8) 100%)';
    overlay.style.backdropFilter = 'blur(5px)';

    if (h3) {
      h3.style.transform = 'translateY(0)';
      h3.style.transition = 'transform 0.4s ease';
    }

    if (p) {
      setTimeout(() => {
        p.style.transform = 'translateY(0)';
        p.style.transition = 'transform 0.4s ease 0.1s';
      }, 50);
    }
  }
}

function animateCardLeave(card) {
  card.style.transform = 'translateY(0) scale(1)';
  card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)';

  const overlay = card.querySelector('.overlay');
  if (overlay) {
    overlay.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(138, 43, 226, 0.3) 50%, rgba(0, 0, 0, 0.7) 100%)';
    overlay.style.backdropFilter = 'blur(2px)';

    const h3 = overlay.querySelector('h3');
    const p = overlay.querySelector('p');

    if (h3) h3.style.transform = 'translateY(20px)';
    if (p) p.style.transform = 'translateY(20px)';
  }
}

function animateSessionCardEnter(card) {
  card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  card.style.transform = 'translateY(-10px) scale(1.02)';
  card.style.boxShadow = '0 25px 50px rgba(240, 147, 251, 0.4), 0 0 30px rgba(255, 20, 147, 0.3)';

  // Add sweep animation
  const sweepElement = document.createElement('div');
  sweepElement.style.position = 'absolute';
  sweepElement.style.top = '0';
  sweepElement.style.left = '-100%';
  sweepElement.style.width = '100%';
  sweepElement.style.height = '100%';
  sweepElement.style.background = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)';
  sweepElement.style.transition = 'left 0.6s';
  card.appendChild(sweepElement);

  setTimeout(() => {
    sweepElement.style.left = '100%';
  }, 10);

  setTimeout(() => {
    card.removeChild(sweepElement);
  }, 600);
}

function animateSessionCardLeave(card) {
  card.style.transform = 'translateY(0) scale(1)';
  card.style.boxShadow = '0 15px 35px rgba(240, 147, 251, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
}

function animateButtonHovers() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      animateButtonEnter(btn);
    });

    btn.addEventListener('mouseleave', () => {
      animateButtonLeave(btn);
    });
  });
}

function animateButtonEnter(btn) {
  btn.style.transition = 'all 0.4s ease';
  btn.style.transform = 'translateY(-3px) scale(1.05)';
  btn.style.boxShadow = '0 15px 35px rgba(255, 215, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
  btn.style.borderColor = 'rgba(255, 255, 255, 0.5)';

  // Add sweep animation for buttons
  const sweepElement = btn.querySelector('::before') || createButtonSweep(btn);
  if (sweepElement) {
    sweepElement.style.left = '100%';
  }
}

function animateButtonLeave(btn) {
  btn.style.transform = 'translateY(0) scale(1)';
  btn.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
  btn.style.borderColor = 'rgba(255, 255, 255, 0.3)';

  const sweepElement = btn.querySelector('::before');
  if (sweepElement) {
    sweepElement.style.left = '-100%';
  }
}

function createButtonSweep(btn) {
  const sweep = document.createElement('div');
  sweep.style.position = 'absolute';
  sweep.style.top = '0';
  sweep.style.left = '-100%';
  sweep.style.width = '100%';
  sweep.style.height = '100%';
  sweep.style.background = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)';
  sweep.style.transition = 'left 0.5s';
  sweep.style.pointerEvents = 'none';
  btn.appendChild(sweep);
  return sweep;
}

function animateWhatsAppPulse() {
  const whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat) {
    let scale = 1;
    let increasing = true;

    const pulseInterval = setInterval(() => {
      if (increasing) {
        scale += 0.01;
        if (scale >= 1.05) increasing = false;
      } else {
        scale -= 0.01;
        if (scale <= 1) increasing = true;
      }

      whatsappFloat.style.transform = `scale(${scale})`;
    }, 50);
  }
}

function animateRotatingBackground() {
  const serviciosFotos = document.querySelector('.servicios-fotos');
  if (serviciosFotos) {
    let rotation = 0;
    const rotateInterval = setInterval(() => {
      rotation += 0.5;
      if (rotation >= 360) rotation = 0;

      const beforeElement = serviciosFotos.querySelector('::before');
      if (beforeElement) {
        beforeElement.style.transform = `rotate(${rotation}deg)`;
      }
    }, 50);
  }
}

function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  const animatedElements = document.querySelectorAll('.about, .servicios, .servicios-fotos');
  animatedElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// Utility function for smooth animations
function animateElement(element, properties, duration = 1000, easing = 'ease-out') {
  const start = performance.now();

  const initialValues = {};
  Object.keys(properties).forEach(prop => {
    if (prop === 'transform') {
      initialValues[prop] = element.style.transform || '';
    } else {
      initialValues[prop] = parseFloat(getComputedStyle(element)[prop]) || 0;
    }
  });

  function animate(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (simple ease-out)
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    Object.keys(properties).forEach(prop => {
      if (prop === 'transform') {
        element.style.transform = properties[prop];
      } else {
        const startValue = initialValues[prop];
        const endValue = properties[prop];
        const currentValue = startValue + (endValue - startValue) * easedProgress;
        element.style[prop] = currentValue + 'px';
      }
    });

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}
