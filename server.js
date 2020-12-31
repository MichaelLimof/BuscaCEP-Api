const express = require('express')

const app = express();

app.use(express.json())

const CepController = require("./CepController")

app.get('/cep', CepController.create)   

app.listen(3333)