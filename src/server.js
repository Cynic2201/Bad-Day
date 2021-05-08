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

// placeholders
disaster = "Cancer"
state = "California"


app.get("/data", (req, res, next)=>{
    //Here are the option object in which arguments can be passed for the python_test.js.
    let options = {
        mode: 'text',
        pythonOptions: ['-u'],  // get print results in real-time
        args: [disaster, state] // Argument (sys.argv[1])
    };
      
  
    PythonShell.run('FindDisease.py', options, function (err, result){
          if (err) throw err;
          res.send(result)
    });
});

app.post('/api/giraffe', (req, res) => {
    const { username, password } = req.body;
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
});

app.listen(port, () => {
    console.log("Server is running on Port: " + port);
});
