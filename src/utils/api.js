var axios = require('axios');

const baseURL = 'http://localhost:3001';

module.exports = {
  test: () => {
    return axios.get(`${baseURL}/people`)
      .then( response => {
        console.log('response in test in api.js', response);
      })
      .catch( error => {
        console.log('error in test', error);
      });
  },
  searchUserInputText: (userTextInput, page) => {
    return axios.get(`${baseURL}/people?q=${userTextInput}&_page=${page}`)
      .then( response => {
        return response;
      })
      .catch( error => {
        console.log('error in searchUserInputText', error);
      });
  }
}
