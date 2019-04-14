distance.key('AIzaSyCUh0fm94u4CxOmDdzsI5ScZIhCJ9OG_m8');


var distance = require('google-distance-matrix');

var origins = ['San Francisco CA'];
var destinations = ['New York NY', '41.8337329,-87.7321554'];



distance.matrix(origins, destinations, function (err, distances) {
    if (!err)
        console.log(distances);
})
