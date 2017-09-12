'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');

  var wizardObject = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  function fillElement(element, color) {
    element.style.fill = color;
  }

  setupWizard.addEventListener('click', function onSetupWizardClick(evt) {
    var newColor;

    if (evt.target.classList.contains('wizard-coat')) {
      newColor = window.colorizeElement(evt.target, window.util.COLORS['coat'], fillElement);
      window.wizard.onCoatChange(newColor);
      return;
    }

    if (evt.target.classList.contains('wizard-eyes')) {
      newColor = window.colorizeElement(evt.target, window.util.COLORS['eyes'], fillElement);
      window.wizard.onEyesChange(newColor);
    }
  });

  window.wizard = wizardObject;
})();
