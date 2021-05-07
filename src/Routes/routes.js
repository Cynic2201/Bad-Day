const { response } = require('express')
const express = require('express')
const exprouter = express.Router()
const userSchemaData = require('../models/users.model')



exprouter.post('/Signup', (request, response) =>{
    const signedUpUser = new userSchemaData({
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email:request.body.email,
        password:request.body.password
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

exprouter.post('/signin', (request, response) => {
    userSchemaData.findOne({
        email: request.body.email,
        password: request.body.password
    })
})

module.exports = exprouter