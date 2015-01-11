fs = require('fs');
path = require('path');

var pathname = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(pathname, function doneReading(err, list) {
	list.forEach(function filter(x) {
		if (path.extname(x) == extension) {
			console.log(x);
		}
	})
})

