'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  function colorize(elem, property, colorSet) {
    elem.style[property] = window.util.getRandomArrItem(window.util.COLORS[colorSet]);
  }

  setupWizard.addEventListener('click', function onSetupWizardClick(evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      colorize(evt.target, 'fill', 'coat');
    }

    if (evt.target.classList.contains('wizard-eyes')) {
      colorize(evt.target, 'fill', 'eyes');
    }
  });

  setupFireballWrap.addEventListener('click', function onSetupFireballWrapClick(evt) {
    colorize(evt.currentTarget, 'background-color', 'fireball');
  });

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() !== 'img') {
      return;
    }

    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
    artifactsElement.style.outline = '2px dashed #f00';
  });

  shopElement.addEventListener('dragend', function (evt) {
    if (evt.target.tagName.toLowerCase() !== 'img') {
      return;
    }

    artifactsElement.style.outline = '';
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.currentTarget.style.outline = '';
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
