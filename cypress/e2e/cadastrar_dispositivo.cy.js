/// <reference types="cypress"/>

describe('Cadastrar dispositivos', () => {

    it('Cadastrar dispositivo com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                "name": "PC Gamer",
                "data": {
                    "year": 2024,
                    "price": 3000,
                    "CPU model": "Intel Core i5",
                    "Hard disk size": "2 TB"
                }

            }

        })
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.name).to.equal("PC Gamer")
            })
    })
})