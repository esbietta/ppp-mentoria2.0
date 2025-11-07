const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

describe('Listar', () => {
describe('GET /reservas', () => {
it('Deve retornar status code 200 ao listar as reservas', async function () {
const resposta = await request(app)
.get('/reservas')
expect(resposta.status).to.equal(200);
})
it('Deve retornar uma lista de reservas', async function () {
const resposta = await request(app)
.get('/reservas')
expect(resposta.status).to.equal(200);
expect(resposta.body).to.be.an('array');
})
});
});