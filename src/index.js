import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <html>
      <head>
          <title>Bad Days: Home Page</title>
          <link rel="stylesheet" href="./index.css" type="text/css" />
      </head>
      <body>
          <div class="container">
              <b>
                  <div class="title">BAD DAY</div>
                  <img class="center-cropped" src="images\2923.jpg" />
                  <button class="btn1" onclick="location.href='register.html';"><b>LOGIN/SIGN-UP</b></button>          
                  <h1 class="text">OR</h1>
                  <button class="btn2" onclick="location.href='report.html';"><b>START NOW</b></button>
              </b>
          </div>     
      </body>
    </html>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
