<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <ul class="navbar_items">
            <li class="left_li" name="home">Home</li>
            <li class="right_li" name="leaderboard">Leaderboard</li>
            <li class="right_li" name="tetris">Play Tetris</li>
        </ul>
        <div class="main">
            <div class="login_div"
                <form method="post" id="login_form">
                    <label for="username">Username</label><br>
                    <input type="text" id="username" name="username" placeholder="username"><br>
                    <label for="password">Password</label><br>
                    <input type="text" id="password" name="password" placeholder="password"><br>
                </form>
                <div class="register_now_div">
                    <br><p>Don't have an account?</p><br>
                    <a href="register.php">Register now</a>
                </div>
            </div>
            <!---<div class="logged_in_msg">
                <h1>Welcome to Tetris</h1>
                <a href="tetris.php"><button>Click here to play</button></a>
            </div>-->
        </div>
    </body>
</html>