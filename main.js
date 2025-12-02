// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // Load images conditionally
  loadServiceImages();

  // Initialize menu functionality
  initializeMenu();

  // Initialize all animations
  initializeAnimations();

  // WhatsApp button functionality
  const botones = document.querySelectorAll('.reservar');
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.dataset.plan;
      const mensaje = encodeURIComponent(`Hola Laura! Quiero reservar una sesión de tarot: ${plan}.`);
      const url = `https://wa.me/5491172233260?text=${mensaje}`;
      window.open(url, '_blank');
    });
  });
});
