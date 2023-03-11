<?php

/* Ovaa strana treba da se naprave tuka u ovaa skripta
teksto moze na sredina i linko i samo pozadina da se stave ista */

$servername="localhost";
$username="root";
$password="";
$dbname="jewellery";
$conn= mysqli_connect($servername, $username, $password,$dbname);

if(isset($_POST['fname']) && isset($_POST['email'])&& isset($_POST['pass'])         );
{
$fname=$_POST['fname'];
$email=$_POST['email'];
$pass=$_POST['pass'];

$pass_enc = password_hash($pass, PASSWORD_DEFAULT);

$sql = "INSERT INTO Users (Username, email, password) VALUES('$fname', '$email',' $pass_enc')";

if(mysqli_query($conn,$sql))
echo "You are now registred";
else {
  echo "You are not registred";
}
}

echo " <p> <a href = 'index.html'> Go to HOME page </a> </p> "; // Ovoa ti e teksto za vrakanje


?>
