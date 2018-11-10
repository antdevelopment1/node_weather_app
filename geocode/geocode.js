const request = require('request');



let geocodeAddress = (address, callback) => {

    let encodedAddress = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=yBhtlHjM1bPrsZdpmAvGlqoG7mrW4Vyw&location=${encodedAddress}&fbclid=IwAR3KoGjr_3fe4JB0XJnj9BdVztH5Envd05EQVxvwQcQLtdkYcjo0t2g55Yo`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Error Unable to connect to google servers.")
        } else if (body.results[0].locations[0].geocodeQualityCode !== 'P1AAA') {
            callback('Unable to find address');
        } else if (body.results[0].locations[0].geocodeQualityCode === 'P1AAA') {
            callback(undefined, {
                address: body.results[0].providedLocation.location,
                Longitude: body.results[0].locations[0].latLng.lng,
                Latitude: body.results[0].locations[0].latLng.lat
            });
        }
    // console.log(JSON.stringify(response, undefined, 2));
})
}

module.exports.geocodeAddress = geocodeAddress;
