'use strict';

(function () {
  window.fireballSize = 22;
  window.wizardSpeed = 3;
  window.wizardWidth = 70;

  window.getFireballSpeed = function (left) {
    return left ? 5 : 2;
  };

  window.getWizardHeight = function (width) {
    return width * 1.337;
  };

  window.getWizardX = function (width) {
    return (width / 2) - (window.wizardWidth / 2);
  };

  window.getWizardY = function (height) {
    return (height / 3) - window.getWizardHeight(window.wizardWidth);
  };
})();
