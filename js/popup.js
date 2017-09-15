'use strict';

(function () {
  var OFFSET = 10; // px

  var popupElement = document.createElement('div');
  popupElement.classList.add('popup');
  popupElement.style.display = 'none';
  document.body.appendChild(popupElement);

  function onMouseMove(evt) {
    popupElement.style.top = evt.pageY + OFFSET + 'px';
    popupElement.style.left = evt.pageX + OFFSET + 'px';
  }

  window.popup = function (target, callback) {
    function onMouseOut() {
      popupElement.style.display = 'none';
      target.removeEventListener('mousemove', onMouseMove);
      target.removeEventListener('mouseleave', onMouseOut);
    }

    target.addEventListener('mouseenter', function () {
      popupElement.innerHTML = callback();
      popupElement.style.display = 'block';

      target.addEventListener('mousemove', onMouseMove);
      target.addEventListener('mouseleave', onMouseOut);
    });
  };
})();
