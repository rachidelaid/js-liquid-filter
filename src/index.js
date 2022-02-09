import './style.css';
import render from './render.js';
import generator from './generator.js';
import { animationStart } from './animate';

let arrays = generator().next().value;
arrays.push([]);

function winCheck() {
  const str = arrays
    .map((x) => x.join(''))
    .sort()
    .filter((x) => x !== '');

  if (
    str[0] === '1111' &&
    str[1] === '2222' &&
    str[2] === '3333' &&
    str[3] === '4444' &&
    str[4] === '5555'
  ) {
    document.querySelector('.modal-wrap').style.display = 'flex';
  }
}

function cancelMove() {
  document.querySelectorAll('.tube').forEach((x) => (x.className = 'tube'));
}

async function goodMove(source, target) {
  const block = [...arrays[source]].pop();
  const arr = [];
  for (let i = arrays[source].length - 1; i >= 0; i--) {
    if (
      arrays[source][i] === block &&
      [...arrays[target], ...arr].length + 1 <= 4
    ) {
      arr.push(arrays[source].pop());
    } else {
      break;
    }
  }

  arrays[target].push(...arr);
  await animationStart(source, target, arr.length);

  // render(arrays);

  cancelMove();
  winCheck();
}

function move() {
  if (document.querySelector('.rotate')) return;

  const targetID = +document.querySelector('.target').id;
  const sourceID = +document.querySelector('.active').id;

  if (arrays[targetID].length === 4) {
    console.log('source is full');
    cancelMove();
    return;
  }

  if (arrays[targetID].length === 0) {
    goodMove(sourceID, targetID);
    return;
  }

  if (
    arrays[targetID].length < 5 &&
    document.querySelector('.active div:last-child') &&
    document.querySelector('.active div:last-child').className.split('-')[1] !=
      arrays[targetID][arrays[targetID].length - 1]
  ) {
    console.log('color not matching');
    cancelMove();
    return;
  }

  document.querySelector('.active').classList.add('rotate');
  goodMove(sourceID, targetID);
}

render(arrays, move);

document.querySelector('.play').addEventListener('click', () => {
  document.querySelector('.modal-wrap').style.display = 'none';
  arrays = generator().next().value;
  arrays.push([]);
  render(arrays, move);
});
