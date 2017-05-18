<?php
if(!$_POST) exit;

    $to 	  = 'abc@somedomain.com'; #Replace your email id...
	$name	  = $_POST['name'];
	$emailid    = $_POST['emailid'];
    $phone  = $_POST['phone'];
	$consult_date  = $_POST['consult_date'];
	$consult_incident  = $_POST['consult_incident'];
    $message  = $_POST['message'];
        
	$subject = $_POST['consult_submit'];
		
	if(get_magic_quotes_gpc()) { $message = stripslashes($message); }

	 $msg  = 'Name: '.$name.'\r\n\n';
	 $msg .= 'Email: '.$emailid.'\r\n\n';
	 $msg .= 'Phone: '.$phone.'\r\n\n';
	 if($consult_date != '')
		 $msg .= 'Date: '.$consult_date.'\r\n\n';
	 if($consult_incident != '')
		 $msg .= 'Practice Area: '.$consult_incident.'\r\n\n';
	 
	 $msg .= "$message\r\n\n";
	 $msg .= "You can contact $name via email, $emailid.\r\n\n";
								
	 if(@mail($to, $subject, $msg, "From: $emailid\r\nReturn-Path: $emailid\r\n"))
	 {
		 echo "<span class='success-msg'>Thanks for Contacting Us, We will get back to you shortly.</span>";
	 }
	 else
	 {
		 echo "<span class='error-msg'>Sorry your message not sent, Try again Later.</span>";
	 }
?>