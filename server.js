const express = require('express')

const app = express();

app.use(express.json())

const CepController = require("./CepController")

app.get('/cep', CepController.index)   

app.listen(3333)
