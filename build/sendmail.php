<?php
	header("Access-Control-Allow-Origin: *");
	$rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);

	if (empty($_POST['name']) && empty($_POST['email'])) die();

	// set response code - 200 OK

	$subject = $_POST['subject'];
	$to = "mahendran313@gmail.com";
	$from = $_POST['email'];

	// data

	$message = $_POST['message'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	//mail($to, $subject, $comments, $headers);
	$sentMail = mail($to, $subject, $message, $headers);

	if( $sentMail == true ) {
		http_response_code(200);
		echo "Message sent successfully...";
	 }else {
		http_response_code(500);
		echo "Message could not be sent...";
	 }
	
?>