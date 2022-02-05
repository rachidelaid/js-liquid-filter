import render from './render';

function* generator() {
  const ids = '1111222233334444'.split('').sort(() => Math.random() - 0.5);
  const data = [
    [...ids.slice(0, 4)],
    [...ids.slice(4, 8)],
    [...ids.slice(8, 12)],
    [...ids.slice(12, 16)],
  ];

  yield data;
}

const arrays = generator().next().value;
arrays.push([]);
console.log(arrays);

function goodMove(source, target, index) {}

function cancelMove() {
  document.querySelectorAll('.tube').forEach((x) => (x.className = 'tube'));
}

function move() {
  const targetID = +document.querySelector('.target').id;

  if (arrays[targetID].length === 4) {
    if (
      (document.querySelector('.target div'),
      +document.querySelector('.target div').className.split('-')[1]) !=
      arrays[targetID][0]
    ) {
      cancelMove();
    }

    cancelMove();
    return;
  }

  goodMove();
}

document.querySelectorAll('.tube').forEach((tube, i) => {
  tube.id = i;
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
    // tube.classList.toggle('rotate');
  });
});

render(arrays);
