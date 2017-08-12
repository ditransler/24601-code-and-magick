'use strict';

window.renderStatistics = function (ctx, names, times) {
  var statsCloud = {
    x: 100,
    y: 10,
    width: 420,
    height: 270,
    style: '#fff',
    shadowStyle: 'rgba(0, 0, 0, 0.7)',
    congratsText: {
      font: '16px PT Mono',
      style: '#000',
      baseLine: true,
      text: 'Ура вы победили!\nСписок результатов:',
      x: 120,
      y: 40,
      yOffset: 20
    }
  };

  // draw a statsCloud's shadow
  ctx.fillStyle = statsCloud.shadowStyle;
  ctx.fillRect(statsCloud.x + 10, statsCloud.y + 10, statsCloud.width, statsCloud.height);

  // draw a statsCloud
  ctx.fillStyle = statsCloud.style;
  ctx.fillRect(statsCloud.x, statsCloud.y, statsCloud.width, statsCloud.height);

  // Congratulations text
  ctx.font = statsCloud.congratsText.font;
  ctx.fillStyle = statsCloud.congratsText.style;
  ctx.baseline = statsCloud.congratsText.baseLine;

  // split the text in lines
  var congratsTextArr = statsCloud.congratsText.text.split('\n');

  // draw each text line with yOffset except for the first line
  for (var i = 0, yPosition = statsCloud.congratsText.y; i < congratsTextArr.length; i++) {
    if (i !== 0) {
      yPosition += statsCloud.congratsText.yOffset;
    }

    ctx.fillText(congratsTextArr[i], statsCloud.congratsText.x, yPosition);
  }
};
