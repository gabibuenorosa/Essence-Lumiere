// --- Modal ---
// Seleção dos elementos do modal
const ctaBtn = document.getElementById('cta-btn');
const modal = document.getElementById('login-modal');
const closeBtn = document.getElementById('close-modal');
const essenceBtn = document.querySelector('.essence-btn');

// Abrir modal ao clicar no botão ctaBtn
ctaBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Abrir modal ao clicar no botão essenceBtn
essenceBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Fechar modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar modal ao clicar fora do conteúdo (na área do modal)
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
