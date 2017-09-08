'use strict';

(function () {
  var URLs = {
    load: 'https://1510.dump.academy/code-and-magick/data',
    save: 'https://1510.dump.academy/code-and-magick'
  };

  function makeRequest(data, onLoad, onError) {
    data = data || null;

    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.timeout = 10000; // 10s

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    if (data !== null) {
      xhr.open('GET', URLs.load);
      xhr.send();
    } else {
      xhr.open('POST', URLs.save);
      xhr.send(data);
    }
  }

  window.backend = {
    load: function (onLoad, onError) {
      makeRequest(onLoad, onError);
    },
    save: function (data, onLoad, onError) {
      makeRequest(data, onLoad, onError);
    }
  };
})();
