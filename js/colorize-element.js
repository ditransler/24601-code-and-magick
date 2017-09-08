'use strict';

(function () {
  window.colorizeElement = function (element, colors, cb) {
    cb(element, window.util.getRandomArrItem(colors));
  };
})();
