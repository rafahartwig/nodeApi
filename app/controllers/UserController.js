const db = require("../../config/db")


module.exports.index = (req,res) => {
    db('users')
    .select()
    .then(dados => {
        dados ? res.json(dados) : res.sendStatus(404)
    }).catch(function(error){
        res.sendStatus(400)
    })
}

module.exports.create = (req,res) => {
    db('users')
    .insert(req.body)
    .then(dados => {
        dados ? res.status(200).json("Castrado realizado com sucesso") : res.sendStatus(404)
   }).catch(function(error) {
       res.send(req.body)
       res.sendStatus(404)
   })
}

module.exports.show = (req,res) => {
    let {id} = req.params
    db('users')
    .select()
    .where('id', id)
    .then(dados => {
        dados ? res.json(dados) : res.sendStatus(404)
    }).catch(function(error){
        res.sendStatus(400)
    })
}

module.exports.update = (req,res) => {
    const {id} = req.params
    db('users')
    .where('id', id)
    .update(req.body)
    .then((dados) => {
        dados ? res.status(200).json("Usuário atualizado com sucesso") : res.sendStatus(404)
    }).catch(function(error) {
        res.sendStatus(400)
    })
}

module.exports.delete = (req,res) => {
    const {id} = req.params
    db('users')
    .where('id', id)
    .delete()
    .then((dados) => {
        dados ? res.status(200).json("Usuário excluído com sucesso") : res.sendStatus(404)
    }).catch(function(error) {
        res.sendStatus(400)
    })
}