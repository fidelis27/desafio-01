const express = require('express');

const routes = express.Router();
const userController = require('../controllers/projectsController');

const middleware = require('../src/middleware');

routes.get('/projects', userController.index); 
routes.post('/projects/', userController.store);
routes.put('/projects/:id', middleware, userController.update);
routes.post('/projects/:id/tasks', middleware, userController.storeByTask);
routes.delete('/projects/:id', middleware, userController.delete);


module.exports = routes