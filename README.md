# Hotel Reservations API

API REST simples para gerenciamento de usuários, quartos, reservas e pagamentos.

Principais características:
- Autenticação JWT (Bearer token)
- Papéis: user / admin
- Armazenamento em memória (volátil)
- Documentação Swagger disponível em /api-docs

Credenciais padrão:
- admin: email `admin@hotel.local` senha `admin123` (criado automaticamente na inicialização)

Como rodar

1. Instale dependências

```powershell
> npm install
```

2. Inicie a aplicação

```powershell
> npm start
```

A API ficará disponível em http://localhost:3000 e a documentação Swagger em http://localhost:3000/api-docs

Endpoints principais
- POST /users/register — registrar usuário
- POST /users/login — login (retorna token)
- GET /rooms — listar quartos (auth)
- POST /rooms — criar quarto (admin)
- POST /reservations — criar reserva (auth)
- GET /reservations — listar reservas do usuário (auth)
- DELETE /reservations/{id} — cancelar reserva (dono ou admin)
- POST /payments — criar pagamento (auth)
- GET /payments — listar pagamentos do usuário (auth)
- PUT /payments/{id} — atualizar status do pagamento (admin)

Observações
- Os dados são mantidos apenas em memória (arquivo `src/data/memoryDB.js`). Reiniciar a aplicação apaga os dados.
- A documentação Swagger descreve os modelos JSON de requisição e resposta.# Hotel Booking API

API REST simples para reservas de hotel com autenticação JWT.

Principais features:
- Users: registro, login, roles (user/admin)
- Rooms: CRUD mínimo (admin cria), listar (usuários autenticados)
- Reservations (bookings): criar, listar, cancelar
- Payments: criar, listar (usuário), atualizar status (admin)
- In-memory DB (para fins de teste)
- Swagger UI disponível em `/api-docs`

Credenciais iniciais:
- admin: `admin@hotel.local` / `admin123`

Como rodar:

```powershell
npm install
npm start
```

Endpoints principais:
- POST /users/register
- POST /users/login -> retorna JWT
- GET /rooms (autenticado)
- POST /rooms (admin)
- POST /reservations (autenticado)
- GET /reservations (autenticado)
- DELETE /reservations/:id (autenticado, dono ou admin)
- POST /payments (autenticado)
- GET /payments (autenticado)
- PUT /payments/:id (admin)

Swagger UI:
- http://localhost:3000/api-docs

Observações:
- JWT secret está em `src/services/userService.js` (variável `SECRET`). Em produção configure via `JWT_SECRET`.
- Dados são mantidos apenas em memória (arquivo `src/data/memoryDB.js`).


