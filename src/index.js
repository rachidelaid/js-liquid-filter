import './style.css';
import render from './render.js';
import generator from './generator.js';
import { animationStart } from './animate';

const arrays = generator().next().value;
arrays.push([]);

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
