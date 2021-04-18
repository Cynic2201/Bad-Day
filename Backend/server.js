const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//Import PythonShell module.
const {PythonShell} =require('python-shell');

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.get("/", (req, res, next)=>{
    //Here are the option object in which arguments can be passed for the python_test.js.
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        args: ['shubhamk314'] //An argument which can be accessed in the script using sys.argv[1]
    };
      
  
    PythonShell.run('FindStat.py', options, function (err, result){
          if (err) throw err;
          // result is an array consisting of messages collected 
          //during execution of script.
          //console.log('result: ', result.toString());
          res.send(result.toString())
    });
});



app.listen(port, () => {
    console.log("Server is running on Port: " + port);
});