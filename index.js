'use strict'
var tape = require('tape')
var results = tape.getHarness()._results
var start = new Date()
var logs = []
var i = 0

tape.createStream()
.on('data', storeLogs)
.on('close', pollReport)

function storeLogs (data) {
  logs.push(data)
}

function pollReport () {
  window.BrowserStack
  ? postReport()
  : setTimeout(pollReport, 500)
}

function postReport () {
  var log = logs[i++]
  log
  ? window.BrowserStack.post('/_log', log.trim(), postReport)
  : window.BrowserStack.post('/_report', {
    runtime: new Date().getTime() - start.getTime(),
    total: results.count,
    passed: results.pass,
    failed: results.fail,
    tracebacks: []
  }, function () {})
}
