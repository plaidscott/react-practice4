var axios = require('axios');
var baseURL = 'http://localhost:3001';

module.exports = {
  initialData: () => {
    return axios.get('http://localhost:3001/people?_page=1')
      .then( response => {
        console.log('response in initialData api.js', response);
        return response
      })
  },
  search: ( textToSearch ) => {
    console.log('texttoSearch in api.js', textToSearch);
    return axios.get(`${baseURL}/people?q=${textToSearch}&_page=1`)
      .then(response => {
        console.log('search response in search, api.js', response);
        return response
      })
  }
}
