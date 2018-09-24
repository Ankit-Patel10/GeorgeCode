const Promise = require('bluebird')
const request = Promise.promisifyAll(require('request'))
const fs = Promise.promisifyAll(require('fs'))

const url = 'https://www.student.cs.uwaterloo.ca/~se212/george/ask-george/cgi-bin/george.cgi/check'

module.exports = function (file) {
  fs.readFileAsync(file, 'utf8')
    .catch((err) => {
      console.error('ERROR: Unable to read file. Double-check your path.')
      return Promise.reject(err)
    })
    .then((contents) => {
      return request.postAsync({
        uri: url,
        headers: {
          'Content-Type': 'text/plain'
        },
        body: contents
      })
      .catch((err) => {
        console.error('ERROR: Failed to connect to george. Please ensure you have internet connectivity.')
        return Promise.reject(err)
      })
    })
    .then((res) => {
       return Promise.resolve(res.body);
    })
    .catch((err) => {})
}