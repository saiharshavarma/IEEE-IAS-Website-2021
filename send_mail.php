<?php

$email_address = $_REQUEST['email_address'] ;
$mobile_number = $_REQUEST['mobile_number'] ;
$comments = $_REQUEST['comments'] ;
$first_name = $_REQUEST['first_name'] ;
$last_name = $_REQUEST['last_name'] ;

if (empty($first_name) || empty($last_name) || empty($email_address) || empty($mobile_number) || empty($comments))
{
	echo "Please fill all the fields";
}
else
{
	mail("saiharshavarma@outlook.com", "IEEE IAS Message", $comments, "From: $first_name $last_name <$email_address>");
	echo"<script type='text/javascript'>alert('Your message sent successfully');
						window.history.log(-1);
						</script>";
}
?>