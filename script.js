document.addEventListener('DOMContentLoaded', () => {
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  /**
   * Determina el tema inicial evaluando:
   * 1. Si existe guardado en localStorage.
   * 2. Si el sistema operativo/navegador prefiere modo oscuro.
   */
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');

  aplicarTema(initialTheme);

  /**
   * Aplica el tema mediante el atributo data-bs-theme de Bootstrap 5.3
   * y actualiza el icono y localStorage.
   */
  function aplicarTema(tema) {
    htmlElement.setAttribute('data-bs-theme', tema);
    localStorage.setItem('theme', tema);

    if (tema === 'dark') {
      themeIcon.classList.remove('bi-moon-stars-fill');
      themeIcon.classList.add('bi-sun-fill');
    } else {
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-stars-fill');
    }
  }

  // Alternar tema al presionar el botón
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const temaActual = htmlElement.getAttribute('data-bs-theme');
      const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
      aplicarTema(nuevoTema);
    });
  }
});