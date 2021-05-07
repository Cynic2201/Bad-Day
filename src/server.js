const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const routesURLs = require('./Routes/routes')
const dotenv = require('dotenv')

require('dotenv').config();

const app = express();
const port = process.env.PORT;
//Import PythonShell module.
const {PythonShell} =require('python-shell');

// placeholders
disaster = "Cancer"
state = "California"

app.get("/", (req, res, next)=>{
    //Here are the option object in which arguments can be passed for the python_test.js.
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        args: [disaster, state] //Argument (sys.argv[1])
    };
      
  
    PythonShell.run('FindDisease.py', options, function (err, result){
          if (err) throw err;
          res.send(result)
    });
});



const uri = process.env.Admin_ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(express.json());
app.use(cors());
app.use('/app', routesURLs)
app.listen(port, () => {
    console.log("Server is running on Port: " + port);
});
