<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <ul class="navbar_items">
            <li class="left_li" name="home"><a href="index.php">Home</a></li>
            <li class="right_li" name="leaderboard"><a href="leaderboard.php">Leaderboard</a></li>
            <li class="right_li" name="tetris"><a href="tetris.php">Play Tetris</a></li>
        </ul>
        <div class="main">
            <div class="register_div">
                <form action="index.php" method="post" id="register_form">
                    First Name: <input type="text" id="first_name" name="Firstname"><br>
                    Last Name <input type="text" id="last_name" name="Lastname"><br>
                    Username: <input type="text" id="register_username" name="Username"><br>
                    <input type="text" id="register_password" name="Registerpassword" placeholder="Password"><br>
                    <input type="text" id="confirm_password" name="Confirmpassword" placeholder="Confirm Password"><br>
                    <p>Display Scores on leaderboard</p>
                    <input type="radio" id="yes_display_scores" name="display" value="yes">Yes
                    <input type="radio" id="no_display_scores" name="display" value="no">No<br>
                    <br><input type="submit"><br>
                </form>
            </div>
        </div>
</body>
</html>