'use strict';

module.exports = {
    type: 'object',
    properties: {
        description: {
            type: 'string'
        },
        place: {
            type: 'string'
        },
        recipient: {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                address: {
                    type: 'string'
                },
                city: {
                    type: 'string'
                },
                postalCode: {
                    type: 'string'
                },
                phone: {
                    type: 'string'
                },
                bankAccount: {
                    type: 'string'
                }
            }
        },
        services: {
            type: 'array',
            minItems: 1,
            items: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    amount: {
                        type: 'number'
                    },
                    cost: {
                        type: 'number'
                    }
                }
            }
        }
    }
};
