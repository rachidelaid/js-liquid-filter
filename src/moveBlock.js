function wait(ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}

export default async function moveBlock(active, target, length) {
  await wait(350);

  active.style.setProperty('transition', `all 1s ease-in-out`);

  const id = active.querySelector('div:last-child').className.split('-')[1];

  for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = `block-${id} animated`;
    div.style.height = 0;
    target.append(div);
  }

  const s = active.style.getPropertyValue('transform');
  active.style.setProperty('transform', s.split('rotate')[0] + `rotate(80deg)`);
  await wait(150);

  for (let i = 0; i < length; i++) {
    target.querySelectorAll(`.animated`)[i].style.height = '50px';
    // active.querySelectorAll('div')[3 - i].style.height = 0;
    active.querySelector('div:last-child').style.height = 0;

    if (i === length - 1) {
      active.style.removeProperty('transition');
    }
    await wait(550);

    active.querySelector('div:last-child').remove();
  }

  target
    .querySelectorAll(`.animated`)
    .forEach((elm) => elm.classList.remove('animated'));
}
