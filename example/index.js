'use strict'
var test = require('tape')

test('browserstack-tape-runner example', function (t) {
  t.plan(2)
  t.ok(true, 'get first result')
  setTimeout(function () {
    t.ok(true, 'get second result')
  }, 500)
})
