'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

var userDialogSimilar = document.querySelector('.setup-similar');
var userWizard = document.querySelector('.setup-wizard');
var userFireballWrap = document.querySelector('.setup-fireball-wrap');

userWizard.addEventListener('click', function onUserWizardClick(evt) {
  if (evt.target.classList.contains('wizard-coat')) {
    evt.target.setAttribute('style', 'fill:' + window.util.getRandomArrItem(COAT_COLORS));
  }

  if (evt.target.classList.contains('wizard-eyes')) {
    evt.target.setAttribute('style', 'fill:' + window.util.getRandomArrItem(EYES_COLORS));
  }
});

userFireballWrap.addEventListener('click', function onUserFireballWrapClick(evt) {
  evt.currentTarget.setAttribute('style', 'background-color:' + window.util.getRandomArrItem(FIREBALL_COLORS));
});

var generatedWizards = generateWizards({
  names: WIZARDS_NAMES,
  surnames: WIZARDS_SURNAMES,
  coatColors: COAT_COLORS,
  eyesColors: EYES_COLORS
});

var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

addWizardsToList(generatedWizards, setupSimilarList, similarWizardTemplate);

userDialogSimilar.classList.remove('hidden');
