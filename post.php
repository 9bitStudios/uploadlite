<?php 

if(isset($_FILES['uid']))
    $fileUploaded = $_FILES['uid'];

$fileUploadLocation = "uploads/";

if(isset($fileUploaded)) {	
	
    if(!empty($fileUploaded)) {
	if(move_uploaded_file($fileUploaded['tmp_name'], $fileUploadLocation.$fileUploaded['name'])) {
	    echo 'File uploaded successfully';
	}
	else
	    echo 'Something went wrong';
    }
    else {
	echo 'Please choose a file';
    }
}
?>
