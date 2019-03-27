process.env.NODE_ENV = 'test';

const expect = require('chai').expect
const mongoose = require('mongoose')
const mongoUnit = require('mongo-unit')

const testMongoUrl = process.env.MONGO_URL;


const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const mongo = require('../app/mongo');
const server = require('../app/webserver');
const testData = require('./testData.json');
describe('getPath', () => {
 //const testData = require('./fixtures/testData.json')
 beforeEach(() => mongoUnit.initDb(testMongoUrl, testData))
 afterEach(() => mongoUnit.drop())

 it('should get path', (done) => {
   chai.request(server).get('/path?spaceship=2&sector=5')
   .then((res) => {
	   res.should.have.status(200);
	   res.body.should.be.a('array');
	   res.body.should.be.eql([{"securityLevel":2,"gates":[5]},{"securityLevel":4,"gates":[2,3]},{"securityLevel":5,"gates":[5]}]);

	   done();
	})
 })
})

// more tests to come, but no time left :(