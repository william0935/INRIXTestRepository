const fs = require('fs');

// replace 'coordinates.json' with whatever json you want to use
const rawData = fs.readFileSync('coordinates.json');
const jsonData = JSON.parse(rawData);

// store all latitutdes and longitudes in an array
const coordinatesArray = [];
jsonData.location.forEach(location => {
    const latitude = location.latitude;
    const longitude = location.longitude;
    coordinatesArray.push(`${latitude}%2C${longitude}`);
});

// save the values of the first and last of the array
let origin = coordinatesArray[0];
let destination = coordinatesArray[coordinatesArray.length - 1];

// get rid of first and last element of array
coordinatesArray.shift();
coordinatesArray.pop();

// generate url
const mapsUrl1 = `https://www.google.com/maps/dir/?api=1&dir_action=navigate&origin=${origin}&destination=${destination}&travelmode=driving&waypoints=${coordinatesArray.join('|')}`;
const mapsUrl2 = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving&waypoints=${coordinatesArray.join('|')}`;
console.log(mapsUrl1);
console.log(mapsUrl2);