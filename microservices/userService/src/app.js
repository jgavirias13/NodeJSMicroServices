const express = require('express');
const app = express();

const logger = (mensaje) => {
    console.log("[User]: " + mensaje);
}

const response = {
    data: [],
    services: "User Service",
    architecture: "Microservice"
};

app.use((req, res, next) => {
    response.data = [];

    next();
});

app.get("/api/v2/users", (req, res) => {
    response.data.push("Juan Pablo", "Juan Jose", "Caliche", "Yenni", "Elo", "Manuela");
    logger("Get user data");
    return res.send(response);
});

module.exports = app;