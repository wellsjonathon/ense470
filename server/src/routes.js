const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const TicketController = require('./controllers/TicketController')
const SoftwareListController = require('./controllers/SoftwareListController')
const UserController = require('./controllers/UserController')

module.exports = (app) => {
  app.post('/signup',
   AuthenticationControllerPolicy.signup,
   AuthenticationController.signup)

  app.post('/login',
   AuthenticationController.login)

   app.get('/allTickets',
  TicketController.getAllTickets)

  app.post('/createNewTicket',
  TicketController.createNewTicket)

  app.get('/getAllSoftware',
  SoftwareListController.getAllSoftware)

  app.post('/createNewSoftware',
  SoftwareListController.createNewSoftware)

  app.post('/getID',
  UserController.getID)

}


