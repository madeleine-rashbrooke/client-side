var xhr = require('xhr')
var greeting = require('./views/showCat.hbs')

//this is not going to work when hosted by github.io etc
var endpoint = 'http://localhost:3000/v1/cats/2'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  console.log(data) // not sure, but should be an object

  var target = document.getElementsByTagName('main')[0]

  var catObj = JSON.parse(data.body)
  
  target.innerHTML = greeting({name: catObj.name, age: catObj.age})
})
