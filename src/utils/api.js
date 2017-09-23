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
    return axios.get(`${homeworldURL}`)
      .then(response => {
        return response;

      })
  },
  editPerson: (updatedPersonObject) => {
    return axios.put(`${baseURL}/people/${updatedPersonObject.id}`,
      updatedPersonObject,
      {headers: {"Content-Type": "application/json"}}
    )
      .then( response => {
        return response;
      })
        .catch( error => {
          console.log('error in editPerson', error);
        })
  },
  editHomeworldName: (updatedHomeworldObject) => {
    return axios.put(`${baseURL}/planets/${updatedHomeworldObject.id}`,
    updatedHomeworldObject,
    {headers: {"Content-Type": "application/json"}}
    )
    .then( response => {
      return response;
    })
    .catch( error => {
      console.log('error in editHomeworldName', error);
    })
  }
}
