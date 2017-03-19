var histogram = require('histogram');
 
histogram("monkey.png", function (err, data) {
    console.log(data.palettes.rgba);
});