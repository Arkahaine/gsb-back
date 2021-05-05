
const express = require('express')
const routerUsers = require('./routers/users.router')
const routerFrais = require('./routers/fichedefrais.router')
const routerFiches = require('./routers/fichedefrais.router')
const routerAuthentification = require('./routers/authentification.router')
let api = express()

api.get('/', (requests, response) => {
    response.json({status:'ok'})
})

api.use(express.json())
api.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
})

api.use('/users', routerUsers)
api.use('/fiches', routerFiches)
api.use('/auth',routerAuthentification)
api.use('/fraisforfait', routerFrais)

const PORT = process.env.PORT || 3001;

api.listen(PORT)


 