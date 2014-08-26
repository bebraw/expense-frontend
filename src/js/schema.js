'use strict';

module.exports = {
    type: 'object',
    properties: {
        description: {
            title: 'Kuvaus',
            type: 'string'
        },
        place: {
            title: 'Paikka',
            type: 'string'
        },
        recipient: {
            title: 'Vastaanottaja',
            type: 'object',
            properties: {
                name: {
                    title: 'Nimi',
                    type: 'string'
                },
                address: {
                    title: 'Osoite',
                    type: 'string'
                },
                city: {
                    title: 'Kaupunki',
                    type: 'string'
                },
                postalCode: {
                    title: 'Postinumero',
                    type: 'string'
                },
                phone: {
                    title: 'Puhelinnumero',
                    type: 'string'
                },
                bankAccount: {
                    title: 'Pankkitili',
                    type: 'string'
                }
            }
        },
        services: {
            title: 'Korvattavat',
            type: 'array',
            minItems: 1,
            items: {
                type: 'object',
                properties: {
                    name: {
                        title: 'Korvattava',
                        type: 'string'
                    },
                    amount: {
                        title: 'Määrä',
                        type: 'number'
                    },
                    cost: {
                        title: 'Hinta',
                        type: 'number'
                    }
                }
            }
        }
    }
};
