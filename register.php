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
            <div class="register_div"
                <form method="post" id="register_form">
                    <input type="text" id="first_name" name="First Name" placeholder="First Name"><br>
                    <input type="text" id="last_name" name="Last Name" placeholder="Last Name"><br>
                    <input type="text" id="register_username" name="Register Username" placeholder="Username"><br>
                    <input type="text" id="register_password" name="Register Password" placeholder="Password"><br>
                    <input type="text" id="confirm_password" name="Confirm Password" placeholder="Confirm Password"><br>
                    <p>Display Scores on leaderboard</p>
                    <input type="radio" id="yes_display_scores" name="display" value="yes">
                    <label for="yes_display_scores">Yes</label><br>
                    <input type="radio" id="no_display_scores" name="display" value="no">
                    <label for="no_display_scores">No</label><br>
                </form>
            </div>
        </div>
</body>
</html>