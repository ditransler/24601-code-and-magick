'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardName = document.querySelector('.setup-user-name');

  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

  var wizard = new window.Wizard({name: wizardName.value});

  wizard.selfRerender = function () {
    var wizardCopy = document.querySelector('svg').cloneNode(true);

    wizardCopy.querySelector('#wizard-coat').style.fill = wizard.coatColor;
    wizardCopy.querySelector('#wizard-eyes').style.fill = wizard.eyesColor;

    var wizardBase64Right = window.util.svg2base64(wizardCopy);

    wizardCopy.querySelector('#wizard').setAttribute('transform', 'translate(62, 0) scale(-1, 1)');
    var wizardBase64Left = window.util.svg2base64(wizardCopy);

    window.restartGame(wizardBase64Right, wizardBase64Left);
  };

  setupWizard.addEventListener('click', function onSetupWizardClick(evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      evt.target.style.fill = wizard.changeCoatColor();
      return;
    }

    if (evt.target.classList.contains('wizard-eyes')) {
      evt.target.style.fill = wizard.changeEyesColor();
    }
  });

  setupWizardFireball.addEventListener('click', function onSetupWizardFireballClick(evt) {
    evt.target.style.backgroundColor = wizard.changeFireballColor();
  });

  window.myWizard = wizard;
})();
