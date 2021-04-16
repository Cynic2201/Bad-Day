const Home = () => {
    return <div>
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
</div>
}

export default Home;