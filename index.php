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
            <li class="left_li" name="home"><a href="index.php">Home</a></li>
            <li class="right_li" name="leaderboard"><a href="leaderboard.php">Leaderboard</a></li>
            <li class="right_li" name="tetris"><a href="tetris.php">Play Tetris</a></li>
        </ul>
        <div class="main">
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                // Check which form the user has submitted
                if (isset($_POST["Firstname"])&&isset($_POST["Lastname"])&&isset($_POST["Username"])&&isset($_POST["Registerpassword"])&&isset($_POST["Confirmpassword"])) {
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
                            echo "Connection Successful";
                            // Add the new user details
                            $sql = "INSERT INTO Users VALUES ('$rusername', '$firstname', '$lastname', '$rpassword', '$display')";
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
                else if (isset($_POST["loginusername"])&&isset($_POST["loginpassword"])) {
                    // Collect value of input fields
                    $loginusername = $_POST["loginusername"];
                    $loginpassword = $_POST["loginpassword"];
                    // Connect to MySQL
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
                        echo "Connection to database Successful";
                        $sql = "SELECT Password FROM Users WHERE UserName='$loginusername'";
                        $result = $conn->query($sql);
                        if ($result == $loginpassword) {
                            $_SESSION["username"] = $loginusername;
                            echo "Successfully logged in";
                        }
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
                        <br><p>Don't have a user account? <a href="register.php">Register now</a></p>
                    </div>
                </div>
            <?php
                }
            ?>
        </div>
    </body>
</html>