//Seyed Ali Farahmand
//Seyed Ali Farahmand
var fs = require('fs');
const path = require('path');

var dir = './logs';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    process.chdir('./logs')
    for (var i = 0; i < 10; i++){
        fs.writeFile('log' + i + '.txt', 'Seyed Ali Farahmand', function (err) {
            if (err) throw err;
        }); 
    }
    process.chdir('..')
}


const files = fs.readdirSync("./logs/")
for (const file of files) {
    console.log(file);
}
