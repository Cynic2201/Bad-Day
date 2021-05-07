import {Link} from "react-router-dom";
import React, { Component} from 'react';

import axios from 'axios'

class LoginSignup extends Component {
    constructor(){
        super()
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
        this.changefirstName = this.changefirstName.bind(this)
        this.changelastName = this.changelastName.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changepassword = this.changepassword.bind(this)
        this.onSubmitform = this.onSubmitform.bind(this)
    }

    changefirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }
    changelastName(event){
        this.setState({
            lastName:event.target.value
        })
    }
    changepassword(event){
        this.setState({
            password:event.target.value
        })
    }
    changeemail(event){
        this.setState({
            email:event.target.value
        })
    }
    onSubmitform(event){
        event.preventDefault()
        
        const registerd = {
            
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:5000/app/Signup', registerd)
        .then(response => console.log(response.data))

        window.location= '/'
        //console.log(registerd)
    }



    render() {
        return (
        <div>
                <head>
            <title>Login/Sign-up</title>
            <link rel="stylesheet" href="./register.css" type="text/css"/>
        </head>

        <body>
            <form class = "alignForm">
                <div class = "center">
                <div class="leftDiv">
                    <b><label for="login">Login</label></b><br></br>
                    
                    <label for="email">Email:</label><br></br>
                    <label for="lname">Password:</label><br></br>
                </div>

                <div class="inputRightDiv">
                    <br></br>
                    <input type="text" id="email" name="email"></input><br></br>
                    <input type="text" id="password" name="password"></input><br></br>
                    <Link to="/Report">
                    <input type="submit" value="Login"></input><br></br>
                    </Link>
                </div>
                </div>
            </form>

            <form class = "alignForm" id="signupForm" onSubmit = {this.onSubmitform}>
                <div class="leftDiv">
                    <b><label for="signup">Sign-up</label></b><br></br>
                    <label for="fname">First Name:</label><br></br>
                    <label for="lname">Last Name</label><br></br>
                    <label for="email">Email:</label><br></br>
                    <label for="password">Password:</label><br></br>
                   
                </div>
                
                <div class="rightDiv">
                    <br></br>
                    <input type="text" id="fname" name="fname" onChange = {this.changefirstName} value= {this.state.firstName}></input><br></br>
                    <input type="text" id="lname" name="lname" onChange = {this.changelastName} value= {this.state.lastName}></input><br></br>
                    <input type="text" id="email" name="email" onChange = {this.changeemail} value= {this.state.email}></input><br></br>
                    <input type="text" id="password" name="password" onChange = {this.changepassword} value= {this.state.password}></input><br></br>
                   
                    <input type="submit" value="Sign-Up"></input><br></br>
                </div>
                
            </form>
        </body>
        <div class = "bottomBar">
        </div>
   
            </div>
        )
    }
}

export default LoginSignup