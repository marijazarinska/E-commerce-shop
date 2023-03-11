<?php

$servername="localhost";
$username="root";
$password="";

$conn= mysqli_connect($servername, $username, $password);

$sql = " CREATE DATABASE jewellery ";

if (mysqli_query($conn,$sql))
{
  echo "da";
}
else {
  echo "ne" . mysqli_error($conn);
}

?>
