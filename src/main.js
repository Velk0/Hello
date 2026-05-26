import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const viewButton = document.querySelector('.view');
  const notification = document.querySelector('.notification');
  const bgReveal = document.querySelector('.bg-reveal');
  const terminal = document.getElementById('terminal'); // Grab the terminal

  if (viewButton && notification && bgReveal) {
    viewButton.addEventListener('click', (e) => {
      e.preventDefault();

      // Trigger the background circle expansion
      bgReveal.classList.add('active');

      // Trigger the notification fade-out
      notification.classList.add('dismissed');

      // Wait 800ms for the black circle to cover the center of the screen,
      // then reveal the terminal layer with the blinking cursor.
      setTimeout(() => {
        terminal.classList.remove('hidden');
      }, 800);
    });
  }
});

window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});