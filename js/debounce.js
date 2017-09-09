'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500; // ms

  var lastTimeout;

  window.debounce = function (func) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(func, DEBOUNCE_INTERVAL);
  };
})();
