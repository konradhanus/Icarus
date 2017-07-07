<?php

echo $method = $_GET['method'];

switch($method){
    case 'getUser':
    echo 'tutaj wyswietli sie lista uzytkownikw';
    break;

    case 'getMessage':
     echo 'tutaj wyswietli sie lista wiadomosci';
    break;
}
?>

<form action="/icarus/get.php" method="GET" >
<input type="text" name="method" />
<input type="submit" value="wyslij" />
</form>