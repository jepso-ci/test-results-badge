
# test-results-badge

  Badge for the test results of a cross browser test, something like:

Defualt size:

![small](https://jepso-ci.com/api/proxy/jepso-ci/test-results-badge/master/test/small.svg)

Larger:

![large](https://jepso-ci.com/api/proxy/jepso-ci/test-results-badge/master/test/large.svg)

## Installation

  Client:

    $ component install jepso-ci/test-results-badge

  Server:

    $ npm install test-results-badge

## API

```javascript
var write = require('fs').writeFileSync;
write('test.svg', jepsoBadge({
  "chrome": "passed",
  "buildID": "master",
  "opera": "passed",
  "internet explorer": "8/7",
  "iphone": "passed",
  "safari": "failed",
  "android": "passed",
  "firefox": "3.5/3.0",
  "ipad": "passed"
}));
```

## License

  MIT
