const prepare = require('mocha-prepare')
const mongoUnit = require('mongo-unit')

console.log('mongo helper');

prepare(done => mongoUnit.start()
 .then(testMongoUrl => {
   process.env.MONGO_URL = testMongoUrl
   console.log('set mongo url', process.env.MONGO_URL);
   done()
 }))
 