<?php
if(!$_POST) exit;

    $to 	  = 'abc@somedomain.com'; #Replace your email id...
	$hf_first_name	  = $_POST['hf_first_name'];
	$hf_last_name    = $_POST['hf_last_name'];
    $hf_consult_incident  = $_POST['hf_consult_incident'];
	$hf_consult_incident_2  = $_POST['hf_consult_incident_2'];
        
	$subject = 'Help Form!';
		
	if(get_magic_quotes_gpc()) { $message = stripslashes($message); }

	 $msg  = 'First Name: '.$hf_first_name.'\r\n\n';
	 $msg .= 'Last Name: '.$hf_last_name.'\r\n\n';
	 $msg .= 'Conult Incident: '.$hf_consult_incident.'\r\n\n';
	 $msg .= 'Conult Incident 2: '.$hf_consult_incident_2.'\r\n\n';
								
	 if(@mail($to, $subject, $msg, ""))
	 {
		 echo "<span class='success-msg'>Thanks for Contacting Us, We will get back to you shortly.</span>";
	 }
	 else
	 {
		 echo "<span class='error-msg'>Sorry your message not sent, Try again Later.</span>";
	 }
?>