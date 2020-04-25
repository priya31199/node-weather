// const request = require('request')

// const forecast = (latitude,longitude,callback) => {

//     const url = 'http://api.weatherstack.com/current?access_key=a680248cc4047bff4a3be0dbc4cff45f&query=' + latitude + ',' + longitude +  '&units=f'

  
//     request({url:url, json:true},(error,response) => {
//         if(error){
//             callback('Unbale to connect weather service',undefined)
//         }else if(response.body.error){
//             callback('Unable to find location',undefined)
//         }else{
//             callback(undefined,response.body.current.weather_descriptions[0] + '. It is currently : ' + response.body.current.temperature + ' degrees out. It feel like ' + response.body.current.feelslike +' degrees out.')
//         }
//     })
// }

// module.exports = forecast



const request = require('request')

const forecast = (latitude,longitude,callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=a680248cc4047bff4a3be0dbc4cff45f&query=' + latitude + ',' + longitude +  '&units=f'

  
    request({url, json:true},(error,{ body}) => {
        if(error){
            callback('Unbale to connect weather service',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently : ' + body.current.temperature + ' degrees out. It feel like ' + body.current.feelslike +' degrees out.')
        }
    })
}

module.exports = forecast