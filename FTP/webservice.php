<?php

include "sql.php";
header('Content-Type: application/json;  charset=utf-8');

echo '[';

// echo json_encode('{"a":1}');
$method = $_GET['method'];

$return = "";

switch($method){
    case 'getUser':

        connect();

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
        //mysql_close($sql_conn);
        break;

   case 'getMessage':
        
        connect();
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
        //mysql_close($sql_conn);
        break;
}
echo substr($return, 0, strlen($return)-1);
echo ']';
?>