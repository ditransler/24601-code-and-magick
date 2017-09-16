'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  function onFileChooserChange(evt) {
    var file = evt.target.files[0];
    var fileName = file.name.toLowerCase();

    if (!file) {
      return;
    }

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (!matches) {
      return;
    }

    var reader = new FileReader();

    reader.addEventListener('load', function () {
      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }

  fileChooser.addEventListener('change', onFileChooserChange);
})();
