var axios = require('axios');

const baseURL = 'http://localhost:3001';

module.exports = {
  getPlanetList: () => {
    return axios.get(`${baseURL}/planets`)
      .then( response => {
        return response.data;

      })
      .catch( error => {
        console.log('error in getPlanetList', error);
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
  },
  editPerson: (personObject) => {
    return axios({
      method: 'put',
      url: `${baseURL}/people/${personObject.id}`,
      headers: { "Content-Type": 'application/json'},
      data: personObject
    })
      .then( response => {
        console.log('response in api.js', response)
        return response;
      })
      .catch( error => {
        console.log('error in editPerson', error);
        return error;
      })
  },
  editHomeworldName: (updatedPlanetObject) => {
    return axios({
      method: 'put',
      url: `${baseURL}/planets/${updatedPlanetObject}`,
      header: {"Content-Type": 'application/json'},
      data: updatedPlanetObject
    })
  }
}
