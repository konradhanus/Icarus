<?php


session_start();
header('Content-Type: application/json;  charset=utf-8');
header('Access-Control-Allow-Origin: *');
require_once('sql.php');
 $userName = $_GET['userName'];
 $userPassword = md5($_GET['userPassword']);

 $is_logged_in = 0;


 if (!$zaptanie=@mysql_query("SELECT `id` FROM `users` WHERE `email`='$userName' AND `password`='$userPassword'")) {
            echo 'Bład zapytania MySQL, odpowiedź serwera: '.mysql_error(); 
}
        else
        {
            while ($wiersze = mysql_fetch_object($zaptanie)) 
            {
                $is_logged_in = 1;
            } 
                

                if(is_null($is_logged_in))
                {
                    $is_logged_in = 0;
                }

                $return2 = array('is_logged_in' => $is_logged_in);
                $_SESSION['is_logged_in'] = $is_logged_in;
                echo json_encode($return2);
			/* 
			$_SESSION['is_logged_in'] = $return;
			header("Location: http://arconsulting.nazwa.pl/icarus/sessiontest.php");*/
//$_SESSION['id']=$return;

        }




?>