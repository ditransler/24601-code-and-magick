'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupSubmit = setup.querySelector('.setup-submit');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');

  function closeSetup() {
    setup.classList.add('hidden');
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
})();
