'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupForm = setup.querySelector('.setup-wizard-form');
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

  function onLoad() {
    closeSetup();
  }

  function onError(err) {
    return err;
  }

  function saveData() {
    var data = new FormData(setupForm);
    window.backend.save(data, onLoad, onError);
  }

  setupOpen.addEventListener('click', openSetup);

  setupClose.addEventListener('click', closeSetup);

  setupSubmit.addEventListener('click', function onSetupSubmitClick(evt) {
    evt.preventDefault();

    saveData();
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

    saveData();
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

      var newTop = setup.offsetTop - shift.y;
      var newLeft = setup.offsetLeft - shift.x;
      var setupHalfWidth = setup.offsetWidth / 2;

      if (newTop < 0) {
        newTop = 0;
      }

      if (newLeft - setupHalfWidth < 0) {
        newLeft = setupHalfWidth;
      }

      if (newLeft + setupHalfWidth > window.innerWidth) {
        newLeft = window.innerWidth - setupHalfWidth;
      }

      setup.style.top = newTop + 'px';
      setup.style.left = newLeft + 'px';
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
