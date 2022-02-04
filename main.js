document.querySelectorAll('.tube').forEach((tube) => {
  tube.addEventListener('click', () => {
    tube.classList.toggle('active');
  });
});
