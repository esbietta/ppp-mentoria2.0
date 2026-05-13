const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const postLogin = require('../fixtures/postLogin.json');

const baseURL = process.env.BASE_URL || 'http://localhost:3000';

describe('Listar', () => {
  let token;

  before(async () => {
    const login = await request(baseURL)
      .post('/login')
      .set('Content-Type', 'application/json')
      .send(postLogin);

    token = login.body.token;
  });

  describe('GET /reservas', () => {
    it('Deve retornar status code 200 ao listar as reservas', async function () {
      const resposta = await request(baseURL)
        .get('/reservas')
        .set('Authorization', `Bearer ${token}`);

      expect(resposta.status).to.equal(200);
    });

    it('Deve retornar uma lista de reservas', async function () {
      const resposta = await request(baseURL)
        .get('/reservas')
        .set('Authorization', `Bearer ${token}`);

      expect(resposta.status).to.equal(200);
      expect(resposta.body).to.be.an('array');
    });
  });
});