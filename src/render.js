export default function render(arrays) {
  for (let i = 0; i < arrays.length; i++) {
    const tube = document.querySelectorAll('.tube')[i];
    tube.innerHTML = '';
    for (let j = 0; j < arrays[i].length; j++) {
      tube.innerHTML += `<div class="block-${arrays[i][j]}"></div>`;
    }
  }
}
