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
            <div id="tetris-bg">
                <button id="play-button" onclick="play(this)">Play</button>
                <script src="tetris.js"></script>
            </div>

        </div>
    </body>
</html>