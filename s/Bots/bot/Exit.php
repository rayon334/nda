<?php
error_reporting(0);
session_start();
$array = explode("\n", file_get_contents('Server/Exit.txt'));
$botExit = $array[array_rand($array)];
?>