'use strict'
var tape = require('tape')
var results = tape.getHarness()._results
var start = new Date()
var logs = ''

tape.createStream()
.on('data', storeLogs)
.on('close', pollReport)

function storeLogs (data) {
  logs += data
}

function pollReport () {
  window.BrowserStack
  ? postLogs()
  : setTimeout(pollReport, 500)
}

function postLogs () {
  logs
  ? window.BrowserStack.post('/_log', logs, postReport)
  : postReport
}

function postReport () {
  window.BrowserStack.post('/_report', {
    runtime: new Date().getTime() - start.getTime(),
    total: results.count,
    passed: results.pass,
    failed: results.fail,
    tracebacks: []
  }, function () {})
}
