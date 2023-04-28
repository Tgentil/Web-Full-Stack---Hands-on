export const toggleButton = document.getElementById('theme-toggle');
export const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleButton.innerHTML = 'Light Mode';
  } else {
    toggleButton.innerHTML = 'Dark Mode';
  }
});
