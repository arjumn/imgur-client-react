var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '309783586e38fac';

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      header: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response){
      return response.json();
    })
  }
}
