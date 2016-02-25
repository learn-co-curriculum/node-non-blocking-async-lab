var chaiSpies = require('chai-spies')
var chai = require('chai')
var fs = require('fs')
var path = require('path')

chai.use(chaiSpies)

var expect = chai.expect

describe('mask.js', function() {
  it('must work', function(done){
    var mask = require(path.join(__dirname, '../mask'))
    mask(function(error, maskedData){
      expect(error).to.be.null
      var maskedTestData = fs.readFileSync('./test/customers.json', 'utf8')
      expect(maskedData).to.equal(maskedTestData)
      done()
    })
  })

  it('uses fs.readFile ', function(done) {
    var spy = chai.spy.on(fs, 'readFile')
    var mask = require(path.join(__dirname, '..', 'mask'))

    mask(function(error, data) {
      expect(spy).to.have.been.called.once
      fs.readFile.reset()
      done()
    })
  })

  it('uses fs.writeFile ', function(done) {
    var spy = chai.spy.on(fs, 'writeFile')
    var mask = require(path.join(__dirname, '..', 'mask'))

    mask(function(error, data) {
      expect(spy).to.have.been.called.once
      fs.writeFile.reset()
      done()
    })
  })

  it('creates customers.json', function(done) {
    var customersLocation = path.join(__dirname, '..', 'customers.json')

    try {
      fs.unlinkSync(customersLocation)
    } catch (e) {
      // swallow errors -- we just want
      // to make sure that the file
      // doesn't exist
    }

    var mask = require(path.join(__dirname, '..', 'mask'))

    mask(function(error, results) {
      var stats
      try {
        stats = fs.statSync(customersLocation)
      } catch(e){
        expect(e).to.be.null
      }

      expect(stats).to.not.be.undefined
      expect(stats.isFile()).to.equal(true)
      done()
    })
  })
})
