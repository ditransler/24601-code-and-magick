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
      firstLine: {
        text: 'Ура вы победили!',
        x: 120,
        y: 40
      },
      secondLine: {
        text: 'Список результатов:',
        x: 120,
        y: 60
      }
    }
  };
  var congratsTextFirstLine = statsCloud.congratsText.firstLine;
  var congratsTextSecondLine = statsCloud.congratsText.secondLine;

  // draw a statsCloud's shadow
  ctx.fillStyle = statsCloud.shadowStyle;
  ctx.fillRect(statsCloud.x + 10, statsCloud.y + 10, statsCloud.width, statsCloud.height);

  // draw a statsCloud
  ctx.fillStyle = statsCloud.style;
  ctx.fillRect(statsCloud.x, statsCloud.y, statsCloud.width, statsCloud.height);

  // draw congratulations text
  ctx.font = statsCloud.congratsText.font;
  ctx.fillStyle = statsCloud.congratsText.style;
  ctx.baseline = statsCloud.congratsText.baseLine;
  ctx.fillText(congratsTextFirstLine.text, congratsTextFirstLine.x, congratsTextFirstLine.y);
  ctx.fillText(congratsTextSecondLine.text, congratsTextSecondLine.x, congratsTextSecondLine.y);
};
