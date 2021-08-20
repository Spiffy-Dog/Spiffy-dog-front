import axios from 'axios';
axios.defaults.baseURL = ``;

const apiService = {
  getCurrentUser() {
    return axios.get(`/users/current`);
  },

  logInUser(credentials) {
    return axios.post(`/users/login`, credentials);
  },

  registerUser(credentials) {
    return axios.post(`/users/registration`, credentials);
  },

  logOutUser() {
    return axios.post(`/users/logout`);
  },

  setUserParameters(data) {
    return axios.post('users/info/', data);
  },

  getUserParameters() {
    return axios.get('users/info/');
  },
};

export default apiService;
