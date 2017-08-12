'use strict';

window.renderStatistics = function (ctx, names, times) {
  var statsCloud = {
    x: 100,
    y: 10,
    width: 420,
    height: 270
  };

  // draw a statsCloud's shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(statsCloud.x + 10, statsCloud.y + 10, statsCloud.width, statsCloud.height);

  // draw a statsCloud
  ctx.fillStyle = '#fff';
  ctx.fillRect(statsCloud.x, statsCloud.y, statsCloud.width, statsCloud.height);
};
