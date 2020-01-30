import {Router} from 'express'
import getAPI from './src/controller/dataController'
const routes = Router()

routes.get('/', getAPI)

module.exports = routes