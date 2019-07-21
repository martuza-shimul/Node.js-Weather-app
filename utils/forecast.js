const request = require('request')

//Forecast

const forecast = (lat, lng, callback) => {

    const url = 'https://api.darksky.net/forecast/f3f71b0caf605df5e8188ad56cb5face/'+ lat +','+ lng +'?units=si'

    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(response.body.error){
            callback('Unable to find the Location!', undefined)
        }else{
            callback(undefined, {
                temperature:  response.body.currently.temperature,
                chanceOfRain: response.body.currently.precipProbability + '%',
                Humidity: response.body.currently.humidity 
            })
        }
    })

}

module.exports = forecast