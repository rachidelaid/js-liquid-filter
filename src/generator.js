// import solve from './solve.js';

const string = '11112222333344445555';

function isMixed(array) {
  for (let i = 0; i < array.length; i++) {
    const str = array[i].join('');
    if (string.includes(str)) {
      return false;
    }
  }

  return true;
}

export default function* generator() {
  while (true) {
    const ids = string.split('').sort(() => Math.random() - 0.5);
    const data = [
      [...ids.slice(0, 4)],
      [...ids.slice(4, 8)],
      [...ids.slice(8, 12)],
      [...ids.slice(12, 16)],
      [...ids.slice(16, 20)],
    ];

    if (isMixed(data)) yield data;
  }
}
