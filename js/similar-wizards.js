'use strict';

(function () {

  function renderWizard(wizard, template) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  function addWizardsToList(wizards, list, template) {
    var fragment = document.createDocumentFragment();

    wizards.forEach(function (wizard) {
      fragment.appendChild(renderWizard(wizard, template));
    });

    list.appendChild(fragment);
  }

  function pickRandomItems(items, amount) {
    /**
     * Create an array of exact amount of 'empty' items.
     * Array.apply helps to 'prefill' the array with 'undefined' values
     * due to which it's possible to call 'map'
     **/
    return Array.apply(null, new Array(amount)).map(function () {
      return window.util.getRandomArrItem(items);
    });
  }

  function onLoad(response) {
    addWizardsToList(pickRandomItems(response, 4), setupSimilarList, similarWizardTemplate);
    setupSimilar.classList.remove('hidden');
  }

  function onError(err) {
    return err;
  }

  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  window.backend.load(onLoad, onError);
})();
