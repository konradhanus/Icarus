<?php


session_start();
header('Content-Type: application/json;  charset=utf-8');
header('Access-Control-Allow-Origin: *');
require_once('sql.php');
 $userName = $_POST['userName'];
 $userPassword = md5($_POST['userPassword']);
 


 $return = 0;


 if (!$zaptanie=@mysql_query("SELECT `id` FROM `users` WHERE `email`='$userName' AND `password`='$userPassword'")) {
            echo 'Bład zapytania MySQL, odpowiedź serwera: '.mysql_error(); 
        }
        else
        {


            while ($wiersze = mysql_fetch_object($zaptanie)) 
            {
                
                $return = 1;
                 
            
             } 
			 
			$_SESSION['is_logged_in'] = $return;
			header("Location: http://arconsulting.nazwa.pl/icarus/sessiontest.php");
//$_SESSION['id']=$return;

        }




?>