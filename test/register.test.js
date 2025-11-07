const request = require("supertest");
const { expect } = require("chai");

describe("Registro de Usuário", () => {
  describe("POST /auth/register", () => {
    it("Deve retornar 201 ao registrar um novo usuário", async () => {
      const resposta = await request("http://localhost:3000")
        .post("/auth/register")
        .set("Content-Type", "application/json")
        .send({
          username: "esbietta",
          email:"esbietta@gmail.com",
          password: "123456",
        });

      expect(resposta.status).to.equal(201);
      expect(resposta.body).to.have.property("message","Usuário registrado com sucesso"
      );
    });

    it("Deve retornar 400 ao tentar registrar um usuário já existente", async () => {
        const resposta = await request("http://localhost:3000")
          .post("/auth/register")
          .set("Content-Type", "application/json")
          .send({
            username: "maria",
            email: "maria@gmail.com",
            password: "123456",
          });

        expect(resposta.status).to.equal(400);
        expect(resposta.body).to.have.property("message", "Usuário já existe");
    });

    it("Deve retornar 400 ao tentar reistrar um usuário sem inserir username, email e password", async () => {
        const resposta = await request("http://localhost:3000")
          .post("/auth/register")
          .set("Content-Type", "application/json")
          .send({
            username: "",
            email: "",
          });

        expect(resposta.status).to.equal(400);
        expect(resposta.body).to.have.property("message", "Usuário, email e senha obrigatórios");
    });
  });
});