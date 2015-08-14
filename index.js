var tapeResults = require('tape').getHarness()._results

var start = new Date()

tapeResults.on('done', function() {
	var finish = new Date()

	var browserStackResults = {
		runtime: finish.getTime() - start.getTime(),
		total: tapeResults.count,
		passed: tapeResults.pass,
		failed: tapeResults.fail,
		tracebacks: []
	}

	BrowserStack.post('/_report', browserStackResults, function(){})
})
