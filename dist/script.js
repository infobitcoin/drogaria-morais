document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-cta]').forEach((link) => {
  link.addEventListener('click', () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'contact_click', contact_location: link.dataset.cta });
  });
});
