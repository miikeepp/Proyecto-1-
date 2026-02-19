// Cambiar tema claro / oscuro
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Mostrar / ocultar sección de descripción
const toggleDescButton = document.getElementById('toggle-description');
const descriptionSection = document.querySelector('.description');

toggleDescButton.addEventListener('click', () => {
    descriptionSection.classList.toggle('hidden');
});
