export default function render(arrays, move) {
  for (let i = 0; i < arrays.length; i++) {
    const tube = document.querySelectorAll('.tube-wrap')[i];
    tube.innerHTML = `<div class="tube" id="${i}"></div>`;
    for (let j = 0; j < arrays[i].length; j++) {
      tube.querySelector(
        '.tube',
      ).innerHTML += `<div class="block-${arrays[i][j]}"></div>`;
    }
  }

  document.querySelectorAll('.tube').forEach((tube) => {
    tube.addEventListener('click', () => {
      document
        .querySelectorAll('.target')
        .forEach((x) => x.classList.remove('target'));

      if (
        document.querySelector('.tube.active') &&
        !tube.classList.contains('active')
      ) {
        tube.classList.toggle('target');
        move();
        return;
      }

      tube.classList.toggle('active');
    });
  });
}
