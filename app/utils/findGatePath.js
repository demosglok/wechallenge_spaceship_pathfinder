module.exports = {
	findPath,
	findAllPathes
}
function findPath(gatesAtLevel, target) {
	if(gatesAtLevel.length == 0) {
		return null;
	}
	let begin = 0;
	let end = 0;
	let sum = gatesAtLevel[begin];
	if(sum > target) {
		return null;
	}
	while(end < gatesAtLevel.length) {
		if(sum == target) {
			return gatesAtLevel.slice(begin, end+1);
		} else if (sum < target) {
			if(end == gatesAtLevel.length - 1) { //no way found
				return null;
			}
			end ++;
			sum += gatesAtLevel[end];
		} else {//if (sum > target) {
			sum -= gatesAtLevel[begin];
			begin++;
			if(begin > end) { // no way found
				return null;
			}
		}
	}
	if(sum == target) {
		return gatesAtLevel.slice(begin, end+1);
	}
	return null;
}
function findAllPathes(gates, target) {
	return gates.map((gatesSecurityLevel, idx) => ({securityLevel: idx+1, gates: findPath(gatesSecurityLevel, target)})).filter(path => !!path.gates);
}