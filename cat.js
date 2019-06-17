const fs = require('fs');

module.exports = (cmd) => {
    const args = cmd.split(' ');
    if (args[0] === 'cat'){
        fs.readFile(args[1], (err, data) => {
            if (err) throw err;
            console.log(data.toString());
            process.stdout.write('\nprompt > ');
        });     
    }
}