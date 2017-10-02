<?php
header('Content-Type: application/json;  charset=utf-8');
header('Access-Control-Allow-Origin: *');
session_start();

$is_logged_in = $_SESSION['is_logged_in'];

if(is_null($is_logged_in))
{
    $is_logged_in = 0;
}

$return = array('is_logged_in' => $is_logged_in);
echo json_encode($return);

?>