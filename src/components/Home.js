import {Link} from "react-router-dom";

const Home = () => {
    return (
    <div>
        <head>
            <title>Bad Days: Home Page</title>
            <link rel="stylesheet" href="./index.css" type="text/css" />
        </head>

        <body>
            <div class="container">
                <b>
                    <div class="title">BAD DAY</div>
                    <img class="center-cropped" src="images\2923.jpg" />
                    <Link to="/LoginSignup">
                    <button class="btn1">LOGIN/SIGN-UP</button>
                    </Link>
                    <h1 class="text">Or</h1>
                    <Link to="/Report">
                    <button class="btn2">START NOW</button>
                    </Link>
                </b>
            </div>
        </body>
    </div>
    )
}

export default Home;