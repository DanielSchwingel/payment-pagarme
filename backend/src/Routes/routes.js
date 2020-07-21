const express = require('express');
const pagarme = require('pagarme');
require('dotenv').config();

const routes = express.Router();

routes.get('/', (req, res)=> {
    pagarme.client.connect({ api_key: process.env.PAGARME_API_KEY_TEST })
        .then(client => client.transactions.all())
        .then(transactions => res.json(transactions))
        .catch(error => console.error(error))
    

})

routes.post('/', (req, res)=> {
    pagarme.client.connect({ api_key: process.env.PAGARME_API_KEY_TEST })
    .then(client => client.transactions.create({
        amount: 100,
        card_number: '5502095248261234',
        card_holder_name: 'MORPHEUS FISHBURNE',
        card_expiration_date: '0627',
        card_cvv: '599',
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
            name: 'Morpheus Fishburne',
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
    .then(transaction => res.json(transaction))
    .catch(error => res.send(error));
})
module.exports = routes;