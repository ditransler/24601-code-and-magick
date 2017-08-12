'use strict';

window.renderStatistics = function (ctx, names, times) {
  var statsCloud = {
    x: 100,
    y: 10,
    width: 420,
    height: 270,
    color: '#fff',
    shadowStyle: 'rgba(0, 0, 0, 0.7)',
    congratsText: {
      font: '16px PT Mono',
      color: '#000',
      baseLine: 'top',
      text: 'Ура вы победили!\nСписок результатов:',
      x: 120,
      y: 30,
      yOffset: 20
    },
    histogram: {
      height: 150,
      columnWidth: 40,
      gutter: 50,
      initialX: 155,
      initialY: 250,
      color: '#000',
      yourColumnColor: 'rgba(255, 0, 0, 1)',
      getOtherColumnsHSLColor: function () {
        // blue color (#0000ff)
        var hue = 240;
        var saturation = Math.floor(Math.random() * 100);
        var lightness = 50;

        return 'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)';
      },
      max: -1,
      maxIndex: -1,
      step: 0
    }
  };

  // draw a statsCloud's shadow
  ctx.fillStyle = statsCloud.shadowStyle;
  ctx.fillRect(statsCloud.x + 10, statsCloud.y + 10, statsCloud.width, statsCloud.height);

  // draw a statsCloud
  ctx.fillStyle = statsCloud.color;
  ctx.fillRect(statsCloud.x, statsCloud.y, statsCloud.width, statsCloud.height);

  // Congratulations text
  ctx.font = statsCloud.congratsText.font;
  ctx.fillStyle = statsCloud.congratsText.color;
  ctx.textBaseline = statsCloud.congratsText.baseLine;

  // split the text in lines
  var congratsTextArr = statsCloud.congratsText.text.split('\n');

  // draw each text line with yOffset except for the first line
  for (var i = 0, congratsLineYposition = statsCloud.congratsText.y; i < congratsTextArr.length; i++) {
    if (i !== 0) {
      congratsLineYposition += statsCloud.congratsText.yOffset;
    }

    ctx.fillText(congratsTextArr[i], statsCloud.congratsText.x, congratsLineYposition);
  }

  // find the max histogram value
  for (var l = 0, time; l < times.length; l++) {
    time = times[l];

    if (time > statsCloud.histogram.max) {
      statsCloud.histogram.max = time;
      statsCloud.histogram.maxIndex = l;
    }
  }

  // find the histogram step
  statsCloud.histogram.step = statsCloud.histogram.height / (statsCloud.histogram.max - 0);

  // draw histogram columns
  for (var j = 0, columnXposition = statsCloud.histogram.initialX; j < times.length; j++) {
    if (j !== 0) {
      columnXposition += statsCloud.histogram.columnWidth + statsCloud.histogram.gutter;
    }

    if (names[j] === 'Вы') {
      ctx.fillStyle = statsCloud.histogram.yourColumnColor;
    } else {
      ctx.fillStyle = statsCloud.histogram.getOtherColumnsHSLColor();
    }

    // use 'negative' heigth to draw a column from bottom to top
    ctx.fillRect(columnXposition, statsCloud.histogram.initialY, statsCloud.histogram.columnWidth, -(times[j] * statsCloud.histogram.step));

    ctx.fillStyle = statsCloud.histogram.color;
    ctx.fillText(Math.round(times[j]), columnXposition, statsCloud.histogram.initialY - (times[j] * statsCloud.histogram.step + 25));
    ctx.fillText(names[j], columnXposition, statsCloud.histogram.initialY + 5);
  }
};
