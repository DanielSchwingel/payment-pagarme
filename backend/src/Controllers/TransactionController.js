const pagarme = require('pagarme');
require('dotenv').config();

module.exports = {
    async index(request, response) {
        pagarme.client.connect({ api_key: process.env.PAGARME_API_KEY_TEST })
            .then(client => client.transactions.all())
            .then(transactions => response.json(transactions))
            .catch(error => console.error(error))  
    },

    async create(request, response) {
        const { name, cardNumber, expirationDate, codeVerification } = request.body;

        pagarme.client.connect({ api_key: process.env.PAGARME_API_KEY_TEST })
        .then(client => client.transactions.create({
            amount: 100,
            card_number: cardNumber,
            card_holder_name: name,
            card_expiration_date: expirationDate,
            card_cvv: codeVerification,
            billing: {
            name: 'Trinity Moss',
            address: {
                country: 'br',
                state: 'sp',
                city: 'Cotia',
                neighborhood: 'Rio Cotia',
                street: 'Rua Matrix',
                street_number: '9999',
                zipcode: '06714360'
                }
            },
            items: [
                {
                    id: 'r123',
                    title: 'Red pill',
                    unit_price: 10000,
                    quantity: 1,
                    tangible: true
                },
                {
                    id: 'b123',
                    title: 'Blue pill',
                    unit_price: 10000,
                    quantity: 1,
                    tangible: true
                }
              ],
              customer: {
                external_id: '#3311',
                name: name,
                type: 'individual',
                country: 'br',
                email: 'mopheus@nabucodonozor.com',
                phone_numbers: ['+5511999998888', '+5511888889999'],
                documents: [
                    {
                      type: 'cpf',
                      number: '00000000000'
                    }
                  ],
              },   
    
        }))
        .then(transaction => response.json(transaction))
        .catch(error => response.send(error));
    }
}