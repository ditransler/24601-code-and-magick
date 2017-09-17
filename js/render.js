'use strict';

(function () {
  var template = document.querySelector('#similar-wizard-template').content;

  function renderWizard(wizard) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    window.popup(wizardElement.querySelector('.wizard'), function () {
      return wizard.artifacts.map(function (it) {
        return it.name;
      }).join('<br>');
    });

    return wizardElement;
  }

  window.render = function (wizards, list) {
    var fragment = document.createDocumentFragment();

    wizards.forEach(function (wizard) {
      fragment.appendChild(renderWizard(wizard));
    });

    list.innerHTML = '';
    list.appendChild(fragment);
  };
})();
