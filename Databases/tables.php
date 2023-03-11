<?php
$servername="localhost";
$username="root";
$password="";
$dbname="jewellery";


$conn= mysqli_connect($servername, $username, $password,$dbname);


$sql1 = " CREATE TABLE Users (
  id INT (10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  Username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
)";

$sql2 = " CREATE TABLE Products (
  id INT (10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Gender VARCHAR(50) NOT NULL,
  Price INT (50) NOT NULL,
  Matterial VARCHAR(50) NOT NULL
)";

if (mysqli_query($conn,$sql1)) {
  echo "da";
}
else {
  echo "ne" . mysqli_error($conn);
}
if (mysqli_query($conn,$sql2))
{
  echo "da";
}else {
  echo "ne" .mysqli_error($conn);
}

 ?>
