<?php

echo $method = $_GET['method'];

switch($method){
    $sql_conn = mysql_connect('sql.arconsulting.nazwa.pl:3306', 'arconsulting_12', '$*HR*FDids')
or die('Nie mogę połączyć się z bazą danych: '.mysql_error());


mysql_select_db('arconsulting_12')
or die('Nie mogę wybrać bazy: '.mysql_error());

if (!$zaptanie=@mysql_query("SELECT `id`, `name`, `surname`, `login`, `password`, `image` FROM `users`")) {
    echo 'Bład zapytania MySQL, odpowiedź serwera: '.mysql_error(); 
}
else{
    
    while ($wiersze = mysql_fetch_object($zaptanie)) {


echo '<pre> 123';

    print_r($wiersze);

    echo '</pre>';


    }



    
}

mysql_close($sql_conn);
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