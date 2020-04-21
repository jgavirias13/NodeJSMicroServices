const express = require('express');
const app = express();

const logger = (mensaje) => {
    console.log("[Car]: " + mensaje);
}

const response = {
    data: [],
    services: "Car Service",
    architecture: "Microservice"
};

app.use((req, res, next) => {
    response.data = [];

    next();
});

app.get("/api/v2/cars", (req, res) => {
    response.data.push("Ferrari", "Toyota", "Kia", "Renault");
    logger("Get car data");
    return res.send(response);
});

module.exports = app;