const ctaButton = document.getElementById('ctaButton');
const ctaMessage = document.getElementById('ctaMessage');

ctaButton?.addEventListener('click', () => {
  ctaMessage.textContent = 'Great choice! Your first milestone starts today.';
});
