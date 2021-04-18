import {Link} from "react-router-dom";

const LoginSignup = () => {
    return <div>
    <html>
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

            <form class = "alignForm" id="signupForm">
                <div class="leftDiv">
                    <b><label for="signup">Sign-up</label></b><br></br>
                    <label for="fname">First Name:</label><br></br>
                    <label for="lname">Last Name</label><br></br>
                    <label for="email">Email:</label><br></br>
                    <label for="email">Repeat Email:</label><br></br>
                    <label for="password">Password:</label><br></br>
                    <label for="password">Repeat Password:</label><br></br>
                </div>
                
                <div class="rightDiv">
                    <br></br>
                    <input type="text" id="fname" name="fname"></input><br></br>
                    <input type="text" id="lname" name="lname"></input><br></br>
                    <input type="text" id="email" name="email"></input><br></br>
                    <input type="text" id="email" name="email"></input><br></br>
                    <input type="text" id="password" name="password"></input><br></br>
                    <input type="text" id="lname" name="lname"></input><br></br>
                    <input type="submit" value="Sign-Up"></input><br></br>
                </div>
                
            </form>
        </body>
        <div class = "bottomBar">
        </div>
    </html>
</div>
}

export default LoginSignup;