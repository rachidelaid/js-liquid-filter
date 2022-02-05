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
  const block = source[source.length - 1];
  const arr = [];
  for (let i = source.length - 1; i >= 0; i--) {
    if (source[i] === block) {
      arr.push(source.pop());
    } else {
      break;
    }
  }
  target.push(...arr);

  cancelMove();
  render(arrays);
}

function move() {
  const targetID = +document.querySelector('.target').id;
  const sourceID = +document.querySelector('.active').id;

  if (arrays[targetID].length === 4) {
    console.log('source is full');
    cancelMove();
    return;
  }

  if (arrays[targetID].length === 0) {
    goodMove(arrays[sourceID], arrays[targetID]);
    return;
  }

  if (
    arrays[targetID].length < 5 &&
    document.querySelector('.active div:last-child') &&
    document.querySelector('.active div:last-child').className.split('-')[1] !=
      arrays[targetID][arrays[targetID].length - 1]
  ) {
    console.log('color not matching');
    console.log(document.querySelector('.active div:last-child').className);
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
