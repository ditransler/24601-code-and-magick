'use strict';

window.renderStatistics = function (ctx, names, times) {
  var statsCloud = {
    x: 100,
    y: 10,
    width: 420,
    height: 270,
    backgroundColor: '#fff',
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
      yourColumnColor: 'rgba(255, 0, 0, 1)', // red color (#ff0000)
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
  ctx.fillStyle = statsCloud.backgroundColor;
  ctx.fillRect(statsCloud.x, statsCloud.y, statsCloud.width, statsCloud.height);

  // Congratulations text
  ctx.font = statsCloud.congratsText.font;
  ctx.fillStyle = statsCloud.congratsText.color;
  ctx.textBaseline = statsCloud.congratsText.baseLine;

  // split the text in lines
  var congratsTextLines = statsCloud.congratsText.text.split('\n');

  // draw each text line with yOffset except for the first line
  var congratsTextLineYposition = statsCloud.congratsText.y;

  congratsTextLines.forEach(function (value, index) {

    if (index !== 0) {
      congratsTextLineYposition += statsCloud.congratsText.yOffset;
    }

    ctx.fillText(value, statsCloud.congratsText.x, congratsTextLineYposition);
  });

  // find the max histogram value
  times.forEach(function (value, index) {
    if (value > statsCloud.histogram.max) {
      statsCloud.histogram.max = value;
      statsCloud.histogram.maxIndex = index;
    }
  });

  // find the histogram step
  statsCloud.histogram.step = statsCloud.histogram.height / (statsCloud.histogram.max - 0);

  // draw histogram columns
  var histogramColumnXposition = statsCloud.histogram.initialX;

  times.forEach(function (value, index) {

    if (index !== 0) {
      histogramColumnXposition += statsCloud.histogram.columnWidth + statsCloud.histogram.gutter;
    }

    // Change the fill color of a column
    if (names[index] === 'Вы') {
      ctx.fillStyle = statsCloud.histogram.yourColumnColor;
    } else {
      ctx.fillStyle = statsCloud.histogram.getOtherColumnsHSLColor();
    }

    var columnHeight = value * statsCloud.histogram.step;

    // draw a column (use 'negative' height to draw a column from bottom to top)
    ctx.fillRect(histogramColumnXposition, statsCloud.histogram.initialY, statsCloud.histogram.columnWidth, -columnHeight);

    // draw labels (times and names)
    var namesLabelY = statsCloud.histogram.initialY + 5; // will be above a column
    var timesLabelY = statsCloud.histogram.initialY - (columnHeight + 25); // will under a column

    ctx.fillStyle = statsCloud.histogram.color;
    ctx.fillText(Math.round(value), histogramColumnXposition, timesLabelY);
    ctx.fillText(names[index], histogramColumnXposition, namesLabelY);
  });
};
