const request = require('request');

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=yBhtlHjM1bPrsZdpmAvGlqoG7mrW4Vyw&location=1301%20lombard%20street%20philadelphia&fbclid=IwAR3KoGjr_3fe4JB0XJnj9BdVztH5Envd05EQVxvwQcQLtdkYcjo0t2g55Yo',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
})