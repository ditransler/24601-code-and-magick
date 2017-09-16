'use strict';

(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

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
