/// <reference types="cypress"/>

describe('Buscar dispositivos', () => {
  
    it('Buscar dispositivos especifico', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/1'
        })
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    })

    it('Buscar dispositivos inexistente', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/3333',
            failOnStatusCode: false

        })
        .then((response) => {
            expect(response.status).to.equal(404)
            expect(response.body.error).to.equal('Oject with id=3333 was not found.')

        })
    })
})