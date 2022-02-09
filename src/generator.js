export default function* generator() {
  while (true) {
    const ids = '11112222333344445555'
      .split('')
      .sort(() => Math.random() - 0.5);
    const data = [
      [...ids.slice(0, 4)],
      [...ids.slice(4, 8)],
      [...ids.slice(8, 12)],
      [...ids.slice(12, 16)],
      [...ids.slice(16, 20)],
    ];

    yield data;
  }
}
