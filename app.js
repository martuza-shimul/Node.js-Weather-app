
const request = require('request')

const url = 'https://api.darksky.net/forecast/f3f71b0caf605df5e8188ad56cb5face/37.8267,-122.4233?units=si'

request({ url: url, json: true}, (error, response) => {
    // console.log(response.body.currently)
    console.log("It's currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain")
})