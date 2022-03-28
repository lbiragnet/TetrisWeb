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
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                // Check which form the user has submitted
                if (isset($_POST["Firstname"])) {   // "Firstname" is only part of the register form
                    // Collect value of input fields
                    $firstname = $_POST["Firstname"];
                    $lastname = $_POST["Lastname"];
                    $rusername = $_POST["Username"];
                    $rpassword = $_POST["Registerpassword"];
                    $cpassword = $_POST["Confirmpassword"];
                    if ($_POST["display"] == "yes") {
                        $display = 1;
                    } else {
                        $display = 0;
                    }
                    // Check if register password and confirm password fields match
                    if ($rpassword!=$cpassword) {
                        echo("Error - passwords do not match");
                    }
                    else {
                        $dbhost = "localhost:.3036";
                        $dbuser = "guest1";
                        $dbpass = "guest1p";
                        $dbname = "tetris";
                        // Create connection
                        $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                        // Check connection
                        if (!$conn) {
                            die("Connection failed: " . mysqli_connect_error());
                        } else {
                            echo "Connection Successful";
                            // Add the new user details
                            $sql = "INSERT INTO Users VALUES ($rusername, $firstname, $lastname, $rpassword, $display)";
                            if ($conn->query($sql) === TRUE) {
                                echo "New record created successfully";
                            } else {
                                echo "Error: " . $sql . "<br>" . $conn->error;
                            }
                        }
                        // Close connection
                        $conn->close();
                    }
                }
                else if (isset($_POST["loginusername"])) {
                    // Collect value of input fields
                    $loginusername = $_POST["loginusername"];
                    $loginpassword = $_POST["loginpassword"];
                    // Connect to MySQL
                    $dbhost = "localhost:.3036";
                    $dbuser = "guest1";
                    $dbpass = "guest1p";
                    $dbname = "tetris";
                    // Create connection
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    // Check connection
                    if (!$conn) {
                        die("Connection failed: " . mysqli_connect_error());
                    } else {
                        echo "Connection Successful";
                    }


                }
            }
            session_destroy();
            if (isset($_SESSION["username"])) {
            ?>
                <div class="logged_in_msg">
                    <h1>Welcome to Tetris</h1>
                    <a href="tetris.php"><button>Click here to play</button></a>
                </div>
            <?php
            } else {
            ?>
                <div class="login_div">
                    <form method="post" id="login_form">
                        Username: <input type="text" id="username" name="loginusername" placeholder="username"><br>
                        Password: <input type="text" id="password" name="loginpassword"><br>
                        <br><input type="submit">
                    </form>
                    <div class="register_now_div">
                        <br><p>Don't have a user account?</p><br>
                        <a href="register.php">Register now</a>
                    </div>
                </div>
            <?php
                }
            ?>
        </div>
    </body>
</html>