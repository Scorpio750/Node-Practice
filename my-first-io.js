var fs = require('fs');

var filename = process.argv[2];
//console.log(filename);

var buffer = fs.readFileSync(filename);
var str = buffer.toString();
var splitStr = str.split("\n");
var sum = 0;

for (var i in splitStr) {
	sum++;
}
sum--;

console.log(sum);
