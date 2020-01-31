import {Router} from 'express'
import getAPI from './src/controller/dataController'
const routes = Router()

routes.get('/api/curriculo', getAPI)

routes.get('*', function(req, res, next) {
  res.status(404).send('Status 404');
});

module.exports = routes