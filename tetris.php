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
            <div id="tetris-bg">
                <script src="tetris.js"></script>
                <button id="play-button" onclick="play(this)">Start the game</button>
            </div>

        </div>
    </body>
</html>