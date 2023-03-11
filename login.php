<?php
session_start();

$servername="localhost";
$username="root";
$password="";
$dbname="jewellery";
$conn= mysqli_connect($servername, $username, $password,$dbname);

$email=$_POST['mail'];
$pass = $_POST['pasw'];

$s = "select * from users where email='$mail' && password='$pasw'";

$result = mysqli_query($conn, $s);

$num = mysqli_num_rows($result);

if($num == 1)
{
  $_SESSION['usermail'] = $email;
  header('location:login1.php');
} else {
  header('location:login.php');
}
?>




/*
if(isset($_POST['submit']))
{
  if(isset($_POST['mail']) && isset($_POST['pasw']))
  {
     $mail = $_POST['mail'];
     $pasw = $_POST['pasw'];
     $query = "SELECT * FROM users WHERE email= '$mail' && password='pasw' ";

   $result = mysqli_query($conn, $query);
   $num = mysqli_num_rows($result);
   if ($num == 1)
   {
     $_SESSION ['user'] = $mail;
     header('location:login.html');
   } else{
     header('location:login1.php');
   }

   echo"<p> Hello </p>";
 } } */

  /*   $result = mysqli_query($conn,$query);
     if(!$result) die ('You are not registered!');
     else {
       $row = mysqli_fetch_row($result);
       $verify = password_verify($pasw,$row[3]);
      if($verify)
      {
        echo "<p> Hi $row[2], you are now logged in as $row[3] </p> ";
        session_start();
        $_SESSION['username'] = $row[2];
        $_SESSION['email'] = $row[3];
        $_SESSION['pass'] = $row[4];

        echo "<p> <a href = continue.php> Click here to continue </a> </p>";
        echo "<p> <a href = logout.php> Logout </a></p>";

     }
      else
    die("Invalid username/password combination");
     }

*/
