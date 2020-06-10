const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const routes = require("../app/routes/web")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

routes(app)

app.listen(3000, () => {
    console.log("Server Rodando")
})

module.exports = app