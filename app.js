const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const userRoutes = require('./src/routes/userRoutes');
const roomRoutes = require('./src/routes/roomRoutes');
const reservationRoutes = require('./src/routes/reservationRoutes');
const userController = require('./src/controllers/userController');

const swaggerDocument = YAML.load(path.join(__dirname, './resources/swagger.yaml'));
const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', userRoutes);
app.use('/auth', userRoutes);
app.use('/rooms', roomRoutes);
app.use('/reservations', reservationRoutes);
app.use('/reservas', reservationRoutes);
app.post('/login', userController.login);
app.post('/register', userController.register);

module.exports = app;
