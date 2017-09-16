'use strict';

(function () {
  var KEYCODES = {
    Enter: 13,
    Esc: 27
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
    }
  };
})();
