const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json({
        name: "Rafael",
        lastName: "Hartwig"
    })
 })

app.listen(3000, () => {
    console.log("Server Rodando")
})

module.exports = app