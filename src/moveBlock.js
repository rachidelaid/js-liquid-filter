function wait(ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}

export default async function moveBlock(active, target, length) {
  await wait(300);

  active.style.setProperty('transition', `all ${length}s ease-in-out`);

  const id = active.querySelector('div:last-child').className.split('-')[1];

  for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = `block-${id}`;
    div.style.height = 0;
    target.append(div);
  }

  for (let i = 0; i < length; i++) {
    const s = active.style.getPropertyValue('transform');
    active.style.setProperty(
      'transform',
      s.split('rotate')[0] + `rotate(${65 + 10 * i}deg)`,
    );

    target.querySelector(`div:nth-child(${length - i})`).style.height = '50px';
    active.querySelector('div:last-child').style.height = 0;

    if (i === length - 1) {
      active.style.setProperty('transition', `all 0.5s ease-in-out`);
    }
    await wait(550);
    active.querySelector('div:last-child').remove();
  }
}
