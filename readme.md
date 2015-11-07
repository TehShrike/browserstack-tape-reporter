Run your [tape](https://github.com/substack/tape) tests on BrowserStack!

To use, simply include this module in the browserify build of your test file:

```sh
browserify test.js node_modules/browserstack-tape-reporter/index.js -o test.build.js
```

And launch the [browserstack-runner](https://github.com/browserstack/browserstack-runner) pointed at an html file that loads `test.build.js`.

Requires tape >=4.1.0 and browserstack-runner >=0.3.7.

More info can be found in [this blog post](http://joshduff.com/#!/post/2015-08-automated-testing-with-tape-and-browserstack.md).

Note: if you're using Webpack, you may need to put browserstack-tape-reporter at the beginning of your entries.  See [#3](https://github.com/TehShrike/browserstack-tape-reporter/issues/3#issuecomment-154742405)
