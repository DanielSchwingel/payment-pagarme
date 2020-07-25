const pagarme = require('pagarme');
const { index } = require('./TransactionController');
require('dotenv').config();

module.exports = {
    async index(request, response){
        pagarme.client.connect({ api_key: process.env.PAGARME_API_KEY_TEST })
            .then(client => client.customers.all())
            .then(customers => response.json(customers))
    },

    async create(request, response){  
        const { id, name, email, cpf, phone} = request.body; 
        const pagarme = require('pagarme')

        pagarme.client.connect({ api_key: process.env.PAGARME_API_KEY_TEST })
            .then(client => client.customers.create({
            external_id: id,
            name: name,
            type: 'individual',
            country: 'br',
            email: email,
            documents: [
                {
                type: 'cpf',
                number: cpf
                }
            ],
            phone_numbers: [phone],
            birthday: '1985-01-01'
            }))
            .then(customer => response.json(customer))
            .catch(error=> response.json(error));
            //erro retorna uma property status 400
    }

}