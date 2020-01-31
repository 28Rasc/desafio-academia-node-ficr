const {Router} = require('express')
const getAPI = require('./controller/dataController')
const routes = Router()

routes.get('/api/curriculo', getAPI)

routes.get('*', function(req, res, next) {
  res.status(404).send('<img src=https://http.cat/[status_code]>');
});

module.exports = routes