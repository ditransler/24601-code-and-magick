'use strict';

(function () {
  var SIMILAR_WIZARDS_NUMBER = 4;
  var similarWizards = [];
  var coatColor;
  var eyesColor;

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

  function pickItems(items, amount) {
    var pickedItems = [];

    for (var i = 0; i < amount; i++) {
      pickedItems.push(items[i]);
    }

    return pickedItems;
  }

  function getRank(wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  function sortWizards(left, right) {
    var rankDiff = getRank(right) - getRank(left);

    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }

    return rankDiff;
  }

  function updateWizards() {
    similarWizards.sort(sortWizards);
    window.render.addWizardsToList(pickItems(similarWizards, SIMILAR_WIZARDS_NUMBER), setupSimilarList);
  }

  function loadHandler(response) {
    similarWizards = response;
    window.render.addWizardsToList(pickRandomItems(similarWizards, SIMILAR_WIZARDS_NUMBER), setupSimilarList);
    setupSimilar.classList.remove('hidden');
  }

  window.wizard.onEyesChange = function (color) {
    eyesColor = color;
    window.debounce(updateWizards);
  };

  window.wizard.onCoatChange = function (color) {
    coatColor = color;
    window.debounce(updateWizards);
  };

  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');

  window.backend.load(loadHandler, window.backend.onError);
})();
