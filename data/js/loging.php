<?php
 
if($_SERVER["REMOTE_ADDR"] == "43.205.78.23"){  //ony acces srvar.com ip addres

 
 $data =    include "loging.js";
$new = "";
 for($i = strlen($data); $i >= 0; $i--){
     $new .=$data[$i];
}

echo $new;

    
    
    
    
    
    
    
    
    
}
else {
    echo "ACCES DEINED  SRVAR>COM";
}
 