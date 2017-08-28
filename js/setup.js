'use strict';

(function () {
  var userWizard = document.querySelector('.setup-wizard');
  var userFireballWrap = document.querySelector('.setup-fireball-wrap');

  userWizard.addEventListener('click', function onUserWizardClick(evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      evt.target.setAttribute('style', 'fill:' + window.util.getRandomArrItem(window.util.COLORS.coat));
    }

    if (evt.target.classList.contains('wizard-eyes')) {
      evt.target.setAttribute('style', 'fill:' + window.util.getRandomArrItem(window.util.COLORS.eyes));
    }
  });

  userFireballWrap.addEventListener('click', function onUserFireballWrapClick(evt) {
    evt.currentTarget.setAttribute('style', 'background-color:' + window.util.getRandomArrItem(window.util.COLORS.fireball));
  });
})();
