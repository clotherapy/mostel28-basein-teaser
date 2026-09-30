const teaser = document.querySelector('#teaser');
const replayButton = document.querySelector('#replay');
const motionStatus = document.querySelector('#motion-status');
let replayTimer;

replayButton.addEventListener('click', () => {
  window.clearTimeout(replayTimer);
  teaser.classList.remove('replay-intro', 'is-rippling');
  // Force a reflow so the entrance and water ripple can play again.
  void teaser.offsetWidth;
  teaser.classList.add('replay-intro', 'is-rippling');
  motionStatus.textContent = 'Занурення повторено';
  replayTimer = window.setTimeout(() => {
    teaser.classList.remove('replay-intro', 'is-rippling');
  }, 1900);
});

teaser.addEventListener('pointerdown', (event) => {
  if (event.target.closest('button, a')) return;
  const bounds = teaser.getBoundingClientRect();
  teaser.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
  teaser.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
  teaser.classList.remove('is-rippling');
  void teaser.offsetWidth;
  teaser.classList.add('is-rippling');
  window.setTimeout(() => teaser.classList.remove('is-rippling'), 1400);
});
