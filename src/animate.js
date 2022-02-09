import moveBlock from './moveBlock';

const changePosition = (active, target, start) => {
  if (start) {
    if (target.getClientRects()[0].left > active.getClientRects()[0].left) {
      console.log('less');
      active.style.setProperty(
        'transform',
        `translate(${
          target.getClientRects()[0].left -
          active.getClientRects()[0].left -
          125
        }px,-150px) rotate(65deg)`,
      );
    } else {
      console.log('more');
      let calc =
        active.getClientRects()[0].left - target.getClientRects()[0].right - 70;

      if (calc > 0) {
        calc *= -1;
      }

      active.style.setProperty(
        'transform',
        `translate(${calc}px,-150px) rotate(-65deg)`,
      );
    }
  } else {
    active.style.removeProperty('transform');
  }
};

const animationStart = (activeID, targetID, length) => {
  return new Promise(async (res) => {
    const active = document.querySelectorAll('.tube')[activeID];
    const target = document.querySelectorAll('.tube')[targetID];

    active.classList.add('rotate');

    changePosition(active, target, true);

    await moveBlock(active, target, length);

    // target.querySelectorAll(`.block-${id}`).forEach((div) => {
    //   div.style.height = 0;
    // });

    // target.querySelectorAll(`.block-${id}`).forEach((div) => {
    //   div.style.height = '50px';
    // });

    changePosition(active, target, false);
    res();
    // setTimeout(() => {
    // }, length * 600);
  });
};
const animationStop = () => {};

export { animationStart, animationStop };
