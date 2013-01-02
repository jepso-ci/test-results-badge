var icons = require('browser-logos');

module.exports = statusBadge;
module.exports.jepsoBadge = jepsoBadge;

function statusImage(x, y, width, height, text) {
  var match;
  var buf = [];
  buf.push('<svg x="', x, '" y="', y, '" width="', width, '" height="', height, '" xmlns="http://www.w3.org/2000/svg" ');
  if (text === 'passed') {
    return icons.pass({x: x, y: y, width: width, height: height});
  } else if (text === 'queued') {
    return icons.pending({x: x, y: y, width: width, height: height});
  } else if (text === 'failed') {
    return icons.fail({x: x, y: y, width: width, height: height});
  } else if (match = /^testing (.*)$/.exec(text)) {
    buf.push(' viewBox="0 0 350 200" style="font-family: Helvetica;">');
    buf.push(icons.pending({x:0, y:0, width: 100, height: 200}));
    buf.push('<text x="110" y="150" style="font-size:150px;">', match[1], '</text>');
  } else if (match = /^(.*)\/(.*)$/.exec(text)) {
    buf.push(' viewBox="0 0 350 300" style="font-family: Helvetica;">');
    buf.push(icons.pass({x:0, y:0, width: 100, height: 150}));
    buf.push('<text x="110" y="125" style="font-size:125px; fill: green;">', match[1], '</text>');
    buf.push(icons.fail({x:0, y:150, width: 100, height: 150}));
    buf.push('<text x="110" y="275" style="font-size:125px; fill: red;">', match[2], '</text>');
  } else {
    throw new Error('Invalid status test');
  }
  buf.push('</svg>');
  return buf.join('');
}

function statusBadge(x, y, width, height, results) {
  var buf = [];

  buf.push('<svg x="', x, '" y="', y, '" width="', width, '" height="', height, '" xmlns="http://www.w3.org/2000/svg" ');
  buf.push(' viewBox="0 0 400 100">');

  buf.push(icons.ie({x: 5, y: 5, width: 40, height: 40}));
  buf.push(statusImage(50, 0, 50, 50, results['internet explorer']));

  buf.push(icons.chrome({x: 5, y: 55, width: 40, height: 40}));
  buf.push(statusImage(50, 50, 50, 50, results['chrome']));

  buf.push(icons.firefox({x: 105, y: 5, width: 40, height: 40}));
  buf.push(statusImage(150, 0, 50, 50, results['firefox']));

  buf.push(icons.opera({x: 105, y: 55, width: 40, height: 40}));
  buf.push(statusImage(150, 50, 50, 50, results['opera']));

  buf.push(icons.apple({x: 205, y: 5, width: 40, height: 25}));
  buf.push('<text x="225" y="45" style="font-size: 15px; text-anchor: middle">Safari</text>');
  buf.push(statusImage(250, 0, 50, 50, results['safari']));

  buf.push(icons.apple({x: 205, y: 55, width: 40, height: 25}));
  buf.push('<text x="225" y="95" style="font-size: 15px; text-anchor: middle">iPhone</text>');
  buf.push(statusImage(250, 50, 50, 50, results['iphone']));

  buf.push(icons.apple({x: 305, y: 5, width: 40, height: 25}));
  buf.push('<text x="325" y="45" style="font-size: 15px; text-anchor: middle">iPad</text>');
  buf.push(statusImage(350, 0, 50, 50, results['ipad']));

  buf.push(icons.android({x: 305, y: 55, width: 40, height: 40}));
  buf.push(statusImage(350, 50, 50, 50, results['android']));

  buf.push('</svg>');
  return buf.join('');
}

function jepsoBadge(results, width, height) {
  width = width || 320;
  height = height || 120;
  var buf = [];
  buf.push('<svg width="' + width + '" height="' + height + '" xmlns="http://www.w3.org/2000/svg" ');
  buf.push(' viewBox="0 0 405 130">');
  buf.push('<text x="405" y="10" style="font-size: 10; text-anchor: end">JEPSO-CI status</text>');
  buf.push('<line x1="1.5" x2="403.5" y1="17" y2="17" style="stroke: #C00080; stroke-width: 10px;" />');
  buf.push('<rect x="2.5" width="400" y="17" height="110" style="stroke: #C00080; stroke-width: 2px; fill: none;" />');
  buf.push(statusBadge(2.5, 27.5, 400, 100, results));
  buf.push('</svg>');
  return buf.join('');
}