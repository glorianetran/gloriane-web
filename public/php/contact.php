<?php
$name = $_POST["name"]; 
$theirEmail = $_POST["mail"];
$subject = $_POST["subject"];
$description = $POST["message"];
$myEmail = "glorianetran@gmail.com";

if(mail($myEmail, $subject, $description, "From: " . $theirEmail)){
    echo "success";
}else{
    echo "poop";
}
?>
