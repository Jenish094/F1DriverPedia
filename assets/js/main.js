// Basic client-side helper for searching/filtering driver cards on the drivers index page
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('driver-search');
  if (!input) return;
  input.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.driver-card');
    cards.forEach(card => {
      const name = (card.textContent || '').toLowerCase();
      card.style.display = name.includes(q) ? '' : 'none';
    });
  });
});
