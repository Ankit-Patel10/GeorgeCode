var request = require('request');

const url = 'https://student.cs.uwaterloo.ca/~se212/george/ask-george/cgi-bin/george.cgi/check'

module.exports = function(document, callback) {
  request.post({
    headers: {'Content-Type': 'text/plain'},
    url: url,
    body: document
  }, function(error, response, body) {
    if(error) {
      callback(error);
    }
    callback(body);
  })
}
