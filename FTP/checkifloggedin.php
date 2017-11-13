<?php
header('Content-Type: application/json;  charset=utf-8');
header('Access-Control-Allow-Origin: *');
session_start();

echo json_encode($_SESSION['is_logged_in']);

?>