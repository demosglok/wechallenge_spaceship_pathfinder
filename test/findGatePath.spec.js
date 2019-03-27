const mocha = require('mocha');
const expect = require('chai').expect;

const FindGatePath = require('../app/utils/findGatePath');

describe('findPath', () => {
	const findPath = FindGatePath.findPath;
	it('should find path', (done) => {
		const found = findPath([1,2,3,4], 5);
		expect(found).to.be.a('array');
		expect(found).to.be.eql([2,3]);
		done();
	})
	it('should find path from 1 element', (done) => {
		const found = findPath([1,2,3,4], 2);
		expect(found).to.be.eql([2]);
		done();
	})
	it('should find path on beginning', (done) => {
		const found = findPath([1,2,3,4], 3);
		expect(found).to.be.eql([1,2]);

		const found2 = findPath([1,2,3,4], 1);
		expect(found2).to.be.eql([1]);
		done();
	})
	it('should find path on end', (done) => {
		const found = findPath([1,2,3,4], 7);
		expect(found).to.be.eql([3,4]);

		const found2 = findPath([1,2,3,4], 4);
		expect(found2).to.be.eql([4]);
		done();
	})
	it('should find path of all elements', (done) => {
		const found = findPath([1,2,3,4], 10);
		expect(found).to.be.eql([1,2,3,4]);
		done();
	})
	it('should return null when no pass exists', (done) => {
		const found = findPath([1,2,3,4], 11);
		expect(found).to.be.null;
		done();
	})
	it('should handle empty array', (done) => {
		const found = findPath([], 5);
		expect(found).to.be.null;
		done();
	})
})
describe('findAllPathes', () => {
	const findAllPathes = FindGatePath.findAllPathes;
	it('should find path', (done) => {
		data = [
			[],
			[1, 7, 13, 17, 22, 34, 56, 78],
			[2, 5, 9, 12, 13, 15, 16, 25, 33, 47],
			[1, 7, 16, 19, 21, 34, 56, 78],
			[2, 3, 7, 11, 16, 17, 20, 25, 33, 47],
			[5, 9, 17, 19, 20, 25, 33, 47],
			[1,2,3,4]
		];
		const found = findAllPathes(data, 56);
		expect(found).to.be.eql([
			{securityLevel: 2, gates: [22, 34]},
			{securityLevel: 3, gates: [2, 5, 9, 12, 13, 15]},
			{securityLevel: 4, gates: [16, 19, 21]},
			{securityLevel: 5, gates: [2, 3, 7, 11, 16, 17]},
			{securityLevel: 6, gates: [17, 19, 20]}
		]);
		done();
	})
})