'use strict'
var test = require('tape')

test('browserstack-tape-runner#1', { timeout: 5000 }, function (t) {
  t.plan(2)
  t.ok(true, 'get first result')
  setTimeout(function () {
    t.ok(true, 'get second result')
  }, 500)
})

test('browserstack-tape-runner#2 - should fail on plan', { timeout: 5000 }, function (t) {
  t.plan(3)
  t.ok(true, 'get first result')
  setTimeout(function () {
    t.ok(true, 'get second result')
  }, 500)
})
