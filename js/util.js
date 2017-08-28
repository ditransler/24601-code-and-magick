'use strict';

(function () {
  var KEYCODES = {
    Enter: 13,
    Esc: 27
  };

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
    }
  };
})();
