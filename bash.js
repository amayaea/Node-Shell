process.stdout.write('prompt > ');
const exportsFromPwd = require('./pwd');
const exportsFromLs = require('./ls');
const exportsFromCat = require('./cat');
const exportsFromCurl = require('./curl');

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

process.stdin.on('data' , (data) => {
    module.exports.cmd = data.toString().trim();

    exportsFromPwd(done);
    exportsFromLs(done);
    exportsFromCat(done);
    exportsFromCurl(done);

    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ');
});