var axios = require('axios');
var baseURL = 'http://localhost:3001';

module.exports = {
  initialData: (currentPage) => {
    return axios.get(`http://localhost:3001/people?_page=${currentPage}`)
      .then( response => {
        return response
      })
  },
  search: ( textToSearch , currentPage ) => {
    console.log('texttoSearch in api.js', textToSearch);
    return axios.get(`${baseURL}/people?q=${textToSearch}&_page=${currentPage}`)
      .then(response => {
        return response
      })
  },
  requestPlanetList: () => {
    return axios.get(`${baseURL}/planets`)
      .then( response => {
        return response.data;
      })
  },
  findHomeworld: (homeworldURL) => {
    console.log('homeworldURL', homeworldURL);
    return axios.get(`${homeworldURL}`)
      .then(response => {
        console.log(' response in findHomeworld in api.js', response)
        return response;

      })
  },
  editName: (updatedPersonObject) => {
    console.log('updatedPersonObject in api.js', updatedPersonObject);
    return axios.put(`${baseURL}/people/${updatedPersonObject.id}`,
      updatedPersonObject,
      {headers: {"Content-Type": "application/json"}}
    )
      .then( response => {
        console.log('response in editName', response);
        return response;
      })
        .catch( error => {
          console.log('error in editName', error);
        })
  }
}
