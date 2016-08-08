var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log(data.body) // FYI: data.body is a string

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]


  var satObj = JSON.parse(data.body)
  // console.log("this is satObj: ", satObj)
  var satName = satObj[0].name
  var satPosition = satObj[0].id
  console.log("this is satName: ", satName)
  target.innerHTML = greeting({name: satName, position: satPosition})
  //target.innerHTML = greeting({name: 'Space Thing'})
})
