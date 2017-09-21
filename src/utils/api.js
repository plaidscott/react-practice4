var axios = require('axios');
var baseURL = 'http://localhost:3001';

module.exports = {
  test: () => {
    return axios.get('http://localhost:3001/people')
      .then( response => {
        console.log('response in test api.js', response);
        return response
      })
  },
  search: ( textToSearch ) => {
    console.log('texttoSearch in api.js', textToSearch);
    return axios.get(`${baseURL}/people?q=${textToSearch}`)
      .then(response => {
        console.log('search response in search, api.js', response);
        return response
      })
  }
}
