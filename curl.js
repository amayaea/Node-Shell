const request = require('request');

module.exports = cmd => {
  const args = cmd.split(" ");
  if (args[0] === "curl") {
    request(args[1], function (error, response, body) {
    if (error) throw error;
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    process.stdout.write('\nprompt > ');
    });
  }
};
