export default function* generator() {
  const ids = '1111222233334444'.split('').sort(() => Math.random() - 0.5);
  const data = [
    [...ids.slice(0, 4)],
    [...ids.slice(4, 8)],
    [...ids.slice(8, 12)],
    [...ids.slice(12, 16)],
  ];

  yield data;
}
