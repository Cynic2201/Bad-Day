const { response, request } = require('express')
const express = require('express')
const exprouter = express.Router()
const userSchemaData = require('../models/users.model')
//Import PythonShell module.
const {PythonShell} =require('python-shell');


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

exprouter.get("/info", (req, res, next)=>{
    //Here are the option object in which arguments can be passed for the python_test.js.
    
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        disaster:request.body.disaster,
        state:request.body.state,
        args: [disaster, state] //Argument (sys.argv[1])
    };
      
  
    PythonShell.run('FindDisease.py', options, function (err, result){
          if (err) throw err;
          res.send(result)
    });
});


module.exports = exprouter