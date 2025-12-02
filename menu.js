// Menu Functionality
function initializeMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuNav = document.getElementById('menu-nav');
  const menuClose = document.getElementById('menu-close');
  const menuBackdrop = document.querySelector('.menu-backdrop');
  const menuLinks = document.querySelectorAll('.menu-link');

  // Auto-open menu on page load
  setTimeout(() => {
    openMenu(menuToggle, menuNav);
  }, 1500); // Wait 1.5 seconds after page load

  // Toggle menu on button click
  menuToggle.addEventListener('click', () => {
    toggleMenu(menuToggle, menuNav);
  });

  // Close menu
  menuClose.addEventListener('click', () => {
    closeMenu(menuToggle, menuNav);
  });

  // Close menu when clicking backdrop
  menuBackdrop.addEventListener('click', () => {
    closeMenu(menuToggle, menuNav);
  });

  // Close menu when clicking links and navigate
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu(menuToggle, menuNav);

      // Smooth scroll to section
      const targetSection = link.dataset.section;
      if (targetSection) {
        const section = document.querySelector(`.${targetSection}`) || document.getElementById(targetSection);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuNav.classList.contains('active')) {
      closeMenu(menuToggle, menuNav);
    }
  });
}

function toggleMenu(toggle, nav) {
  const isActive = nav.classList.contains('active');
  if (isActive) {
    closeMenu(toggle, nav);
  } else {
    openMenu(toggle, nav);
  }
}

function openMenu(toggle, nav) {
  toggle.classList.add('active');
  nav.classList.add('active');

  // Animate menu items with stagger
  const menuLinks = nav.querySelectorAll('.menu-link');
  menuLinks.forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateX(-20px)';

    setTimeout(() => {
      link.style.transition = 'all 0.3s ease';
      link.style.opacity = '1';
      link.style.transform = 'translateX(0)';
    }, 100 + (index * 50));
  });
}

function closeMenu(toggle, nav) {
  toggle.classList.remove('active');
  nav.classList.remove('active');

  // Reset menu items
  const menuLinks = nav.querySelectorAll('.menu-link');
  menuLinks.forEach(link => {
    link.style.opacity = '';
    link.style.transform = '';
    link.style.transition = '';
  });
}
