const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const postLogin = require('../fixtures/postLogin.json');

const baseURL = process.env.BASE_URL || 'http://localhost:3000';

describe('realizarReserva', function () {
  let token;

  before(async function () {
    const login = await request(baseURL)
      .post('/login')
      .set('Content-Type', 'application/json')
      .send(postLogin);

    token = login.body.token;
  });

  it('Deve criar uma reserva válida e retornar 201', async function () {
    const roomResponse = await request(baseURL)
      .post('/rooms')
      .set('Authorization', `Bearer ${token}`)
      .send({ type: 'Standard', price: 120, capacity: 2 });

    expect(roomResponse.status).to.equal(201);
    expect(roomResponse.body).to.have.property('id');

    const reservaResponse = await request(baseURL)
      .post('/reservations')
      .set('Authorization', `Bearer ${token}`)
      .send({ roomId: roomResponse.body.id, startDate: '2026-01-01', endDate: '2026-01-05' });

    expect(reservaResponse.status).to.equal(201);
    expect(reservaResponse.body).to.have.property('id');
    expect(reservaResponse.body.roomId).to.equal(roomResponse.body.id);
    expect(reservaResponse.body.status).to.equal('active');
  });
});