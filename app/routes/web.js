const userController = require("../controllers/UserController")

module.exports = (app) => {

    app.get('/users', (req, res) => {
        userController.index(req,res)
     })

     app.get('/users/:id', (req, res) => {
        userController.show(req,res)
     })

     app.post('/users', (req, res) => {
        userController.create(req,res)
     })

     app.put('/users/:id', (req, res) => {
        userController.update(req,res)
     })

     app.delete('/users/:id', (req, res) => {
        userController.delete(req,res)
     })

}