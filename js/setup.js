'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  function fillElement(element, color) {
    element.style.fill = color;
  }

  function changeElementBackground(element, color) {
    element.style.backgroundColor = color;
  }

  setupWizard.addEventListener('click', function onSetupWizardClick(evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      window.colorizeElement(evt.target, window.util.COLORS['coat'], fillElement);
    }

    if (evt.target.classList.contains('wizard-eyes')) {
      window.colorizeElement(evt.target, window.util.COLORS['eyes'], fillElement);
    }
  });

  setupFireballWrap.addEventListener('click', function onSetupFireballWrapClick(evt) {
    window.colorizeElement(evt.currentTarget, window.util.COLORS['fireball'], changeElementBackground);
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
