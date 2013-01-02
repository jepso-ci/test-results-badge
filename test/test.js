var jepsoBadge = require('../').jepsoBadge;
var write = require('fs').writeFileSync;
var join = require('path').join;

var results = {
  "chrome": "passed",
  "buildID": "master",
  "opera": "failed",
  "internet explorer": "8/7",
  "iphone": "testing 5.1",
  "safari": "failed",
  "android": "passed",
  "firefox": "3.5/3.0",
  "ipad": "passed"
};
write(join(__dirname, 'large.svg'), jepsoBadge(results, 1000, 400));
write(join(__dirname, 'small.svg'), jepsoBadge(results));