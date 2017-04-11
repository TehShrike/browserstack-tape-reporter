Run your [tape](https://github.com/substack/tape) tests on BrowserStack!

To use, simply include this module in the browserify build of your test file:

```sh
browserify test.js node_modules/browserstack-tape-reporter/index.js -o test.build.js
```

And launch the [browserstack-runner](https://github.com/browserstack/browserstack-runner) pointed at an html file that loads `test.build.js`.

Content of an HTML file should be as follows:

```html
<!DOCTYPE html>
<html><body></body><script src="test.build.js"></script></html>
```

_Note: It is important to add script after `<body>` for `BrowserStack` API to be properly injected by [browserstack-runner](https://github.com/browserstack/browserstack-runner)_

Requires tape >=4.1.0 and browserstack-runner >=0.3.7.

More info can be found in [this blog post](http://joshduff.com/#!/post/2015-08-automated-testing-with-tape-and-browserstack.md).
