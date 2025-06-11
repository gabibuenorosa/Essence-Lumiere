// --- Botão de subir (Scroll to Top) ---
// Seleção do botão de scroll to top
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Mostrar ou esconder o botão conforme o scroll da página
window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

// Ação de subir suavemente ao topo ao clicar no botão
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});