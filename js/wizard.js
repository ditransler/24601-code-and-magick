'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');

  var wizardObject = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
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

  return window.wizard = wizardObject;
})();
