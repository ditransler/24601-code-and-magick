'use strict';

(function () {
  var KEYCODES = {
    Enter: 13,
    Esc: 27
  };

  var COLORS = {
    coat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyes: ['black', 'red', 'blue', 'yellow', 'green'],
    fireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var DEBOUNCE_INTERVAL = 500; // ms

  window.util = {
    isEscKey: function (evt) {
      return evt.keyCode === KEYCODES.Esc;
    },
    isEnterKey: function (evt) {
      return evt.keyCode === KEYCODES.Enter;
    },
    getRandomArrItem: function (arr) {
      var randomIndex = Math.floor(Math.random() * arr.length);

      return arr[randomIndex];
    },
    debounce: function (func) {
      var lastTimeout;

      return function () {
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }

        lastTimeout = window.setTimeout(func, DEBOUNCE_INTERVAL);
      };
    },
    COLORS: COLORS
  };
})();
