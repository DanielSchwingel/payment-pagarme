const axios = require('axios');

const api_payment = axios.create({
    baseURL : 'http://localhost:3333'
});

export default api_payment;