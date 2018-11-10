const request = require('request');

let geocodeAddress = (address) => {
    return new Promise( (resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);

        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=yBhtlHjM1bPrsZdpmAvGlqoG7mrW4Vyw&location=${encodedAddress}&fbclid=IwAR3KoGjr_3fe4JB0XJnj9BdVztH5Envd05EQVxvwQcQLtdkYcjo0t2g55Yo`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Error Unable to connect to google servers.")
            } else if (body.results[0].locations[0].geocodeQualityCode !== 'P1AAA') {
                reject('Unable to find address');
            } else if (body.results[0].locations[0].geocodeQualityCode === 'P1AAA') {
                resolve({
                    address: body.results[0].providedLocation.location,
                    Longitude: body.results[0].locations[0].latLng.lng,
                    Latitude: body.results[0].locations[0].latLng.lat
                });
            }
        // console.log(JSON.stringify(response, undefined, 2));
    })
    })
};

geocodeAddress('761 Broadway Newark NJ')
    .then((location) => {
        console.log(JSON.stringify(location, undefined, 2));
    }, (errorMessage) => {
        console.log(errorMessage);
    })
