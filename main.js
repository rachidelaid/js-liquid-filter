// import generator from './generator';
function* generator() {
  const ids = [
    '1',
    '2',
    '3',
    '4',
    '1',
    '2',
    '3',
    '4',
    '1',
    '2',
    '3',
    '4',
    '1',
    '2',
    '3',
    '4',
  ].sort(() => Math.random() - 0.5);
  const data = [
    [...ids.slice(0, 4)],
    [...ids.slice(4, 8)],
    [...ids.slice(8, 12)],
    [...ids.slice(12, 16)],
  ];

  yield data;
}

document.querySelectorAll('.tube').forEach((tube) => {
  tube.addEventListener('click', () => {
    tube.classList.toggle('active');
    tube.classList.toggle('rotate');
  });
});

const arrays = generator().next().value;
console.log(arrays);

for (let i = 0; i < arrays.length; i++) {
  const tube = document.querySelectorAll('.tube')[i];
  for (let j = 0; j < arrays[i].length; j++) {
    tube.innerHTML += `<div class="block-${arrays[i][j]}"></div>`;
  }
}
