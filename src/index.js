import './style.css';
import render from './render.js';
import generator from './generator.js';

const arrays = generator().next().value;
arrays.push([]);
console.log(arrays);

function cancelMove() {
  document.querySelectorAll('.tube').forEach((x) => (x.className = 'tube'));
}

function goodMove(source, target) {
  const block = source.pop();
  target.push(block);

  cancelMove();
  render(arrays);

  console.log(arrays);
}

function move() {
  const targetID = +document.querySelector('.target').id;
  const sourceID = +document.querySelector('.active').id;

  if (arrays[targetID].length === 4) {
    cancelMove();
    return;
  }

  if (
    document.querySelector('.target div') &&
    document.querySelector('.target div').className.split('-')[1] !=
      arrays[sourceID][arrays[sourceID].length - 1]
  ) {
    cancelMove();
    return;
  }

  goodMove(arrays[sourceID], arrays[targetID]);
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
