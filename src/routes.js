const { Router } = require('express')
const getAPI = require('./controller/dataController')
const anyRouteNotFound = require('./middlewares/anyRouteNotFound')
const routes = Router()

routes.get('/api/curriculo', getAPI)

routes.use(anyRouteNotFound)

module.exports = routes