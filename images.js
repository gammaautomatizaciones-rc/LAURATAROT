// Image Loading Functionality with Lazy Loading
function loadServiceImages() {
  // Create Intersection Observer for lazy loading
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        loadImageForContainer(container);
        observer.unobserve(container); // Stop observing once loaded
      }
    });
  }, {
    rootMargin: '50px 0px', // Load images 50px before they come into view
    threshold: 0.1
  });

  // Observe service images
  const serviceImages = document.querySelectorAll('.servicio-image[data-image]');
  serviceImages.forEach(container => {
    imageObserver.observe(container);
  });

  // Observe card background images
  const cardImages = document.querySelectorAll('.card-img[data-image]');
  cardImages.forEach(card => {
    imageObserver.observe(card);
  });
}

function loadImageForContainer(container) {
  const imagePath = container.dataset.image;
  if (!imagePath) return;

  // Add loading class for styling
  container.classList.add('loading');

  checkImageExists(imagePath).then(exists => {
    container.classList.remove('loading');

    if (exists) {
      if (container.classList.contains('servicio-image')) {
        // Load as img element for service images
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Servicio Laura Tarot';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.onload = () => {
          img.style.opacity = '0';
          container.appendChild(img);
          // Fade in animation
          requestAnimationFrame(() => {
            img.style.transition = 'opacity 0.5s ease';
            img.style.opacity = '1';
          });
        };
      } else if (container.classList.contains('card-img')) {
        // Load as background image for cards
        const img = new Image();
        img.onload = () => {
          container.style.backgroundImage = `url('${imagePath}')`;
          container.classList.add('loaded');
        };
        img.src = imagePath;
      }
    } else {
      // Fallback for card images
      if (container.classList.contains('card-img')) {
        container.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      }
    }
  });
}

function checkImageExists(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}
