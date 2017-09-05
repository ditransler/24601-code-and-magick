'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupUserPic = setup.querySelector('.setup-user-pic');
  var setupSubmit = setup.querySelector('.setup-submit');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');

  function closeSetup() {
    setup.classList.add('hidden');
    setup.style = '';
    document.removeEventListener('keydown', onSetupEscPress);
  }

  function openSetup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
  }

  function onSetupEscPress(evt) {
    if (!window.util.isEscKey(evt)) {
      return;
    }

    if (document.activeElement === setupUserName) {
      return;
    }

    closeSetup();
  }

  setupOpen.addEventListener('click', openSetup);

  setupClose.addEventListener('click', closeSetup);

  setupSubmit.addEventListener('click', function onSetupSubmitClick(evt) {
    evt.preventDefault();

    closeSetup();
  });

  setupOpenIcon.addEventListener('keydown', function onSetupOpenIconEnterPress(evt) {
    if (!window.util.isEnterKey(evt)) {
      return;
    }

    openSetup();
  });

  setupClose.addEventListener('keydown', function onSetupCloseEnterPress(evt) {
    if (!window.util.isEnterKey(evt)) {
      return;
    }

    closeSetup();
  });

  setupSubmit.addEventListener('keydown', function onSetupSubmitEnterPress(evt) {
    if (!window.util.isEnterKey(evt)) {
      return;
    }

    evt.preventDefault();

    closeSetup();
  });

  setupUserPic.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
