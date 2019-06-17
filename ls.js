const input = require('./bash');
const fs = require('fs');

module.exports = (done) => {
    if (input.cmd === 'ls'){
        fs.readdir('./', 'utf8', (err, files) => {
            if (err) {
                throw err;
            }
            else {
                done(files.join('\n'));
            }
        })
    }
}
