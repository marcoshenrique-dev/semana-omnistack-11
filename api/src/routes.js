const express = require('express');

const connection = require('./database/connection');
const ongController = require('../src/controllers/OngController');
const incidentController = require('../src/controllers/IncidentController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs' , ongController.create);

routes.post('/incidents' , incidentController.create);
routes.get('/incidents' , incidentController.index);
routes.delete('/incidents/:id' , incidentController.delete);

routes.get('/profile' , ProfileController.index);

routes.post('/session', SessionController.create);

module.exports = routes;