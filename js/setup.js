'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomArrItem(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}

function generateWizardName(names, surnames) {
  var name = getRandomArrItem(names);
  var surname = getRandomArrItem(surnames);
  var isSwap = Math.floor(Math.random() * 2); // Get random binary value: 0 or 1

  return isSwap ? name + ' ' + surname : surname + ' ' + name;
}
