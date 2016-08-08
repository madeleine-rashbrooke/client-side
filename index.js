var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log(data.body) // FYI: data.body is a string

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]


  var satObj = JSON.parse(data.body)
    target.innerHTML = greeting({name: satObj[0].name, position: satObj[0].altitude, visibility: satObj[0].visibility})
  //target.innerHTML = greeting({name: 'Space Thing'})
})
