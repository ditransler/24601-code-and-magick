'use strict';

(function () {
  var similarWizards = [];

  function pickRandomItems(items, amount) {
    /**
     * Create an array of exact amount of 'empty' items.
     * Array.apply helps to 'prefill' the array with 'undefined' values
     * due to which it's possible to call 'map'
     **/
    return Array.apply(null, new Array(amount)).map(function () {
      return window.util.getRandomArrItem(items);
    });
  }

  function loadHandler(response) {
    similarWizards = response;
    window.render.addWizardsToList(pickRandomItems(similarWizards, 4), setupSimilarList);
    setupSimilar.classList.remove('hidden');
  }

  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');


  window.backend.load(loadHandler, window.backend.onError);
})();
