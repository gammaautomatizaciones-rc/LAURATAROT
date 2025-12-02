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
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior
      const plan = btn.dataset.plan;
      let mensaje = '';
      if (plan === 'general') {
        mensaje = 'Hola, quiero reservar una Lectura General';
      } else if (plan === 'amor') {
        mensaje = 'Hola, quiero reservar una sesión de Amor y Relaciones';
      } else if (plan === 'anual') {
        mensaje = 'Hola, quiero reservar una Lectura Anual';
      }
      const url = `https://wa.me/5491172233260?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
    });
  });

  // Modal functionality
  const modal = document.getElementById('urgency-modal');
  const closeBtn = document.querySelector('.close');
  const closeModalBtn = document.getElementById('close-modal');

  // Show modal on page load
  window.addEventListener('load', () => {
    modal.style.display = 'block';
  });

  // Close modal when clicking close button
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
