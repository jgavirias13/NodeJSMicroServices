const express = require('express');
const app = express();

const logger = (mensaje) => {
    console.log("[Book]: " + mensaje);
}

const response = {
    data: [],
    services: "Book Service",
    architecture: "Microservice"
};

app.use((req, res, next) => {
    response.data = [];

    next();
});

app.get("/api/v1/users", (req, res) => {
    response.data.push("Effective C#", "La biblia de nodeJs");
    logger("Get book data");
    return res.send(response);
});

module.exports = app;