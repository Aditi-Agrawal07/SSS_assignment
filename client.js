const axios = require('axios');

const getAccessToken = async () => {
  const response = await axios.post('https://dev-8yhp5xb1cbdaopyv.us.auth0.com/oauth/token', {
    client_id: '0JSU2xaA9uyEjJIKFzgjgA7yLDxsQa93',
    client_secret: '7xNFev958QfaXw4OFfcNh9HH_vMkyQCbMtxEI9avo9xHs9Wh85K1T44TNPXTc7j6',
    audience: 'http://SSS_assignment',
    grant_type: 'client_credentials'
  });
  
  return response.data.access_token;
};

getAccessToken().then(token => {
  console.log('Access Token:', token);
}).catch(error => {
  console.error('Error getting access token:', error.response ? error.response.data : error.message);
});
