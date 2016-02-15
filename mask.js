var fs = require('fs')
module.exports = function(callback){
  var customers = []
  var customersCSV = fs.readFile('./customers.csv', 'utf8', function(error, customersCSV){
    if (error) return callback(error)
    customersLines = customersCSV.split('\n')
    customersLines.forEach(function(customerLine){
      var customerArray = customerLine.split(',')
      customers.push({
        id: customerArray[0],
        firstName: customerArray[1],
        lastName: customerArray[2],
        email: customerArray[3],
        city: customerArray[4],
        creditCard: customerArray[5],
        creditCardNumber: '************' + customerArray[6].substr(12)
      })
    })
    var customersJSON = JSON.stringify(customers, null, 2)
    fs.writeFile('./customers.json', customersJSON, 'utf-8', function(error){
      if (error) return callback(error)
      return callback(null, customersJSON)
    })

  })
}