const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

const swaggerDocument = YAML.load(path.join(__dirname, "./resources/swagger.yaml"));

const userRoutes = require("./src/routes/userRoutes");
const roomRoutes = require("./src/routes/roomRoutes");
const reservationRoutes = require("./src/routes/reservationRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/users", userRoutes);
app.use("/rooms", roomRoutes);
app.use("/reservations", reservationRoutes);
app.use("/payments", paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
