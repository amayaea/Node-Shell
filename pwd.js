const input = require('./bash');

module.exports = (done) => {
    if (input.cmd === 'pwd'){
        done(process.cwd());
    }
}
