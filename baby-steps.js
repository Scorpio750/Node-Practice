//console.log(process.argv);
var sum = 0;

for (var x in process.argv) {
	if (x == 0 || x == 1) continue; 
	
	else {
		//console.log("elem: " + process.argv[x]);
		sum += +process.argv[x];
		//console.log("sum: " + sum);
	}
}

console.log(sum);
