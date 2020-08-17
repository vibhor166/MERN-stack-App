//Check if a token is passed in, if yes, then set it to the global header, if not, delete it from the global header

import axios from 'axios';

function setAuthToken(token) {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
}

export default setAuthToken;
