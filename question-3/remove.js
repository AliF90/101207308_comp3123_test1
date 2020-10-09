var fs = require('fs');
const path = require('path');

fs.readdir('logs', (err, files) => {
    if (err) throw err;
    for (const file of files) {
        console.log("delete file .. " + file);
        fs.unlink(path.join('logs', file), err => {
            if (err) throw err;
        });
    };

});

fs.rmdir('logs', { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
})