'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardName = document.querySelector('.setup-user-name');

  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

  var wizard = new window.Wizard({name: wizardName.value});

  setupWizard.addEventListener('click', function onSetupWizardClick(evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      evt.target.style.fill = wizard.changeCoatColor();
      return;
    }

    if (evt.target.classList.contains('wizard-eyes')) {
      evt.target.style.fill = wizard.changeEyesColor();
    }
  });

  setupWizardFireball.addEventListener('click', function onSetupWizardFireballpClick(evt) {
    evt.target.style.backgroundColor = wizard.changeFireballColor();
  });

  window.myWizard = wizard;
})();
