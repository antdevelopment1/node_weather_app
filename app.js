const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

let encodedAddress = encodeURIComponent(argv.a);

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=yBhtlHjM1bPrsZdpmAvGlqoG7mrW4Vyw&location=${encodedAddress}&fbclid=IwAR3KoGjr_3fe4JB0XJnj9BdVztH5Envd05EQVxvwQcQLtdkYcjo0t2g55Yo`,
    json: true
}, (error, response, body) => {
        console.log(body.results[0].locations[0].geocodeQualityCode);
    if (error) {
        console.log('Unable to connect to google servers.');
    } else if (body.results[0].locations[0].geocodeQualityCode !== 'P1AAA') {
        console.log('Unable to find that address');
    } else if (body.results[0].locations[0].geocodeQualityCode === 'P1AAA') {
        console.log(`Address: ${JSON.stringify(body.results[0].providedLocation.location)}`);
        console.log(`Longitude: ${JSON.stringify(body.results[0].locations[0].latLng.lng)}`);
        console.log(`Laditude: ${JSON.stringify(body.results[0].locations[0].latLng.lat)}`);  
    }
    
    
    // console.log(JSON.stringify(response, undefined, 2));
})