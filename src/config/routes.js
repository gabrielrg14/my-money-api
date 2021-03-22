const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    // Rotas protegidas (necessitam um Token JWT válido para ser acessadas)
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    // Rotas de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')

    // Rotas abertas (que não necessitam de um Token JWT válido para ser acessadas)
    const openApi = express.Router()
    server.use('/oapi', openApi)

    // Rotas de acesso, cadastro e validação de Token JWT no sistema
    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}