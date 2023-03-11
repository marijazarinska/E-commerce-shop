<?php
// od koa se najaves dava te na ovaa strana da unasas produkti
// i tuka treba pozadina da se stave teksto da se srede na sredina ili nes slicno

$servername="localhost";
$username="root";
$password="";
$dbname="jewellery";
$conn= mysqli_connect($servername, $username, $password,$dbname);
echo "<form action ='insertProducts.php' method='POST'> ";


echo "<h3> Insert products: </h3>
<h3> Name: <input type ='text' name='name' > </h3>
<h3> Gender: <input type='text' name='gender'> </h3>
<h3> Price: <input type='text' name='price'> </h3>
<h3> Material: <input type='text' name='material'> </h3>
<br>
<input type='submit' name='submit' value='Insert'> ";



?>
