'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  function colorize(elem, property, colorSet) {
    elem.style[property] = window.util.getRandomArrItem(window.util.COLORS[colorSet]);
  }

  setupWizard.addEventListener('click', function onSetupWizardClick(evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      colorize(evt.target, 'fill', 'coat');
    }

    if (evt.target.classList.contains('wizard-eyes')) {
      colorize(evt.target, 'fill', 'eyes');
    }
  });

  setupFireballWrap.addEventListener('click', function onSetupFireballWrapClick(evt) {
    colorize(evt.currentTarget, 'background-color', 'fireball');
  });
})();
