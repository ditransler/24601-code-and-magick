'use strict';

(function () {
  var WIZARD_COLORS = {
    coat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyes: ['black', 'red', 'blue', 'yellow', 'green']
  };

  var Wizard = function (data) {
    this.name = data.name;
    this.coatColor = data.colorCoat;
    this.eyesColor = data.colorEyes;
  };

  Wizard.prototype.setName = function (name) {
    if (!name) {
      throw new Error('Имя не задано');
    }

    if (name.length > 30) {
      throw new Error('Недопустимое значение имени мага: ' + name);
    }

    this.name = name;
    this.onChange(this);
    return name;
  };

  Wizard.prototype.changeCoatColor = function () {
    var newColor = window.util.getRandomArrItem(WIZARD_COLORS.coat);
    this.coatColor = newColor;
    this.onChange(this);
    return newColor;
  };

  Wizard.prototype.changeEyesColor = function () {
    var newColor = window.util.getRandomArrItem(WIZARD_COLORS.eyes);
    this.eyesColor = newColor;
    this.onChange(this);
    return newColor;
  };

  Wizard.prototype.onChange = function (wizard) {
    return wizard;
  };

  window.Wizard = Wizard;
})();
