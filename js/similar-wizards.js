'use strict';

(function () {
  var SIMILAR_WIZARDS_NUMBER = 4;
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

  function pickItems(items, amount) {
    var pickedItems = [];

    for (var i = 0; i < amount; i++) {
      pickedItems.push(items[i]);
    }

    return pickedItems;
  }

  function getRank(wizard) {
    var rank = 0;

    if (wizard.coatColor === window.myWizard.coatColor) {
      rank += 2;
    }

    if (wizard.eyesColor === window.myWizard.eyesColor) {
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

  function wizardsComparator(left, right) {
    var rankDiff = getRank(right) - getRank(left);

    return (rankDiff === 0) ? namesComparator(left.name, right.name) : rankDiff;
  }

  function updateWizards() {
    similarWizards.sort(wizardsComparator);
    window.render.addWizardsToList(pickItems(similarWizards, SIMILAR_WIZARDS_NUMBER), setupSimilarList);
  }

  function loadHandler(response) {
    similarWizards = response.map(function (it) {
      return new window.Wizard(it);
    });

    window.render.addWizardsToList(pickRandomItems(similarWizards, SIMILAR_WIZARDS_NUMBER), setupSimilarList);
    setupSimilar.classList.remove('hidden');
  }

  var debouncedUpdateWizards = window.util.debounce(updateWizards);

  window.myWizard.onChange = function () {
    debouncedUpdateWizards();
  };

  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');

  window.backend.load(loadHandler, window.backend.onError);
})();
