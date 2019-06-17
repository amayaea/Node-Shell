process.stdout.write('prompt > ');
const exportsFromPwd = require('./pwd');
const exportsFromLs = require('./ls');
const exportsFromCat = require('./cat');
const exportsFromCurl = require('./curl');

process.stdin.on('data' , (data) => {
    const cmd = data.toString().trim();

    exportsFromPwd(cmd);
    exportsFromLs(cmd);
    exportsFromCat(cmd);
    exportsFromCurl(cmd);

    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ');
});

const done = (output) => {
    
}
