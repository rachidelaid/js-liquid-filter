import moveBlock from './moveBlock';

const changePosition = (active, target, start) => {
  if (start) {
    active.style.setProperty(
      'transform',
      `translate(${
        target.getClientRects()[0].left - active.getClientRects()[0].left - 125
      }px,-130px) rotate(65deg)`,
    );
  } else {
    active.style.setProperty('transform', 'unset');
  }
};

const animationStart = (activeID, targetID, length) => {
  return new Promise((res) => {
    const active = document.querySelectorAll('.tube')[activeID];
    const target = document.querySelectorAll('.tube')[targetID];

    active.classList.add('rotate');

    changePosition(active, target, true);
    console.log(length);

    moveBlock(active, target, length);

    // target.querySelectorAll(`.block-${id}`).forEach((div) => {
    //   div.style.height = 0;
    // });

    // target.querySelectorAll(`.block-${id}`).forEach((div) => {
    //   div.style.height = '50px';
    // });

    setTimeout(() => {
      changePosition(active, target, false);
      res();
    }, length * 600);
  });
};
const animationStop = () => {};

export { animationStart, animationStop };
