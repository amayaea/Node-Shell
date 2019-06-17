const input = require('./bash');
const fs = require('fs');

module.exports = (done) => {
    const args = input.cmd.split(' ');
    if (args[0] === 'cat'){
        fs.readFile(args[1], (err, data) => {
            if (err) throw err;
            done(data.toString());
        });     
    }
}