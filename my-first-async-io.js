var fs = require('fs')
var sum = undefined

function countNewline(callback) {
	fs.readFile(process.argv[2], function doneReading(err, fileContents) {
		var str = fileContents.toString();
		sum = str.split("\n").length - 1
		callback()
	})
}

function outputSum() {
	console.log(sum)
}

countNewline(outputSum)
