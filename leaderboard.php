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
                <div class="leaderboard_div">
                    <table style="width:80%">
                        <tr>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                        <?php
                        $dbhost = "localhost";
                        $dbuser = "root";
                        $dbpass = "Grossqlserver32";
                        $dbname = "tetris";
                        // Create connection
                        $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                        // Check connection
                        if (!$conn) {
                            die("Connection failed: " . mysqli_connect_error());
                        } else {
                            $sql = "SELECT Username, Score FROM Scores";
                            $result = $conn->query($sql);
                            while($row = mysqli_fetch_array($result)){
                                echo "<tr><td>" . htmlspecialchars($row['Username']) . "</td><td>" . htmlspecialchars($row['Score']) . "</td></tr>";
                            }
                        }
                        ?>
                    </table>
                </div>
            </div>
        </body>
    </html>