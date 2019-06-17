const input = require('./bash');
const request = require('request');

module.exports = (done) => {
  const args = input.cmd.split(" ");
  if (args[0] === "curl") {
    request(args[1], function (error, response, body) {
    if (error) throw error;
    done(body); // Print the HTML catfor the Google homepage.
    });
  }
};
