const fs = require('fs');

module.exports  = (filename) => {
	const gatesdata = fs.readFileSync(filename, {encoding: 'utf8'});
	const lines = gatesdata.split('\n');
	const gates = lines.map(line => line.split(' ').map(num => parseInt(num.trim())));
	return gates;
}
