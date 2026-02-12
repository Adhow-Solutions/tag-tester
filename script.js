document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  
  darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDarkMode = document.documentElement.classList.contains('dark');
    darkModeToggle.querySelector('.material-icons').textContent = isDarkMode ? 'light_mode' : 'dark_mode';
  });
});