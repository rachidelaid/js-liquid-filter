function winCheck(arrays) {
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
    return true;
  }
  return false;
}

function move(source, target) {
  const block = [...source].pop();
  const arr = [];
  for (let i = source.length - 1; i >= 0; i--) {
    if (source[i] === block && [...target, ...arr].length + 1 <= 4) {
      arr.push(source.pop());
    } else {
      break;
    }
  }

  target.push(...arr);
}

export default function solve(arrays) {
  arrays.push([]);

  for (let i = 0; i < arrays.length; i++) {
    const source = arrays[i];

    for (let j = 0; j < arrays.length; j++) {
      if (j === i) continue;

      const target = arrays[i];

      if (target.length === 4) continue;

      if (target.length === 0) {
        move(source, target);
      } else if (
        target.length < 5 &&
        source[source.length - 1] != target[target.length - 1]
      ) {
        continue;
      } else {
        move(source, target);
      }

      console.log(arrays);

      if (winCheck(arrays)) return true;
    }
  }

  return false;
}
