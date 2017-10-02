<?php
session_start();

// echo $_SESSION['is_logged_in'];

if ($_SESSION['is_logged_in'] === 0)
	{
	echo '<font size="28" color="red">Zjeba³eœ, spierdalaj dziadu!!</font>';
	}
	
else if ($_SESSION['is_logged_in'] === 1)
	{
	echo '<font size="28" color="pink">Zosta³eœ zalogowany, skarbie :-************** buzi dupci, lovciam cie!!</font>';
	}
	
	else if (!isset($_SESSION['is_logged_in']))
	{
	header("Location: http://arconsulting.nazwa.pl/icarus/testpost.php");
	echo '<font size="28" color="pink">Przekierowywuje</font>';
	}


?>


