'use strict';

(function () {
  var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  function generateWizardName(names, surnames) {
    var name = window.util.getRandomArrItem(names);
    var surname = window.util.getRandomArrItem(surnames);
    var isSwap = Math.floor(Math.random() * 2); // Get random binary value: 0 or 1

    return isSwap ? name + ' ' + surname : surname + ' ' + name;
  }

  function generateWizards(params) {
    var wizards = [];

    params = params || {};
    params.quantity = params.quantity || 4;
    params.names = params.names || [];
    params.surnames = params.surnames || [];
    params.coatColors = params.coatColors || [];
    params.eyesColors = params.eyesColors || [];

    for (var i = 0; i < params.quantity; i++) {
      wizards.push({
        name: generateWizardName(params.names, params.surnames),
        coatColor: window.util.getRandomArrItem(params.coatColors),
        eyesColor: window.util.getRandomArrItem(params.eyesColors)
      });
    }

    return wizards;
  }

  function renderWizard(wizard, template) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  function addWizardsToList(wizards, list, template) {
    var fragment = document.createDocumentFragment();

    wizards.forEach(function (wizard) {
      fragment.appendChild(renderWizard(wizard, template));
    });

    list.appendChild(fragment);
  }

  var generatedWizards = generateWizards({
    names: WIZARDS_NAMES,
    surnames: WIZARDS_SURNAMES,
    coatColors: window.util.COLORS.coat,
    eyesColors: window.util.COLORS.eyes
  });

  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  addWizardsToList(generatedWizards, setupSimilarList, similarWizardTemplate);

  setupSimilar.classList.remove('hidden');
})();
