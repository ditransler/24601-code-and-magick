'use strict';

(function () {
  window.colorizeElement = function (element, colors, cb) {
    var color = window.util.getRandomArrItem(colors);

    cb(element, color);

    return color;
  };
})();
