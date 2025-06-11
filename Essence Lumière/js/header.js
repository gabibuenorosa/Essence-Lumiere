// Aguarda o carregamento completo do conteúdo da página (DOM)
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o elemento <header> da página
  const header = document.querySelector('header');

  // Adiciona um evento que será acionado sempre que o usuário fizer scroll na página
  window.addEventListener('scroll', () => {
    // Verifica se o deslocamento vertical do scroll passou de 50 pixels
    if (window.scrollY > 50) {
      // Se passou de 50, adiciona a classe 'scrolled' ao header
      header.classList.add('scrolled');
    } else {
      // Se não passou de 50, remove a classe 'scrolled' do header
      header.classList.remove('scrolled');
    }
  });
});
