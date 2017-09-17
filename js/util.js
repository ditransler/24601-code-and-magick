'use strict';

(function () {
  var KEYCODES = {
    Enter: 13,
    Esc: 27
  };

  var DEBOUNCE_INTERVAL = 500; // ms

  var DATA_URI_PREFIX = 'data:image/svg+xml;charset=utf-8;base64,';

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
    svg2base64: function (svgElement) {
      // convert an element into text
      var xml = new XMLSerializer().serializeToString(svgElement);

      // encode text in bse64
      var svg64 = window.btoa(xml);

      // add a header
      return DATA_URI_PREFIX + svg64;
    }
  };
})();
