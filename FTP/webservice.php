<?php



header('Content-Type: application/json');

echo '[';

// echo json_encode('{"a":1}');
$method = $_GET['method'];

$return = "";

switch($method){
    case 'getUser':
        $sql_conn = mysql_connect('sql.arconsulting.nazwa.pl:3306', 'arconsulting_12', '$*HR*FDids')
        or die('Nie mogę połączyć się z bazą danych: '.mysql_error());

        mysql_select_db('arconsulting_12') or die('Nie mogę wybrać bazy: '.mysql_error());

        if (!$zaptanie=@mysql_query("SELECT `id`, `name`, `surname`, `login`, `password`, `image` FROM `users`")) {
            echo 'Bład zapytania MySQL, odpowiedź serwera: '.mysql_error(); 
        }
        else
        {
            while ($wiersze = mysql_fetch_object($zaptanie)) 
            {
                
                $return .= json_encode($wiersze);
                
                $return .=  ',';
             } 
        }
        mysql_close($sql_conn);
        break;

   case 'getMessage':
        mysql_close($sql_conn);
        $sql_conn = mysql_connect('sql.arconsulting.nazwa.pl:3306', 'arconsulting_12', '$*HR*FDids') or die('Nie mogę połączyć się z bazą danych: '.mysql_error());
        mysql_select_db('arconsulting_12') or die('Nie mogę wybrać bazy: '.mysql_error());

        if (!$zaptanie=@mysql_query("SELECT `id`, `id_guest`, `id_host`, `message`, `date_sent`, `date_received` FROM `messages`")) 
        { 
            echo 'Bład zapytania MySQL, odpowiedź serwera: '.mysql_error(); 
        }
        else 
        {
            while ($wiersze = mysql_fetch_object($zaptanie)) 
            {
               
                 $return .= json_encode($wiersze);
                
                $return .=  ',';
            }
        }
        break;
}
echo $return;
echo ']';
?>