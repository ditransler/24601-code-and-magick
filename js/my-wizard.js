'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardName = document.querySelector('.setup-user-name');

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

  window.myWizard = wizard;
})();
