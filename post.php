<?php 

// should match the id passed in the form
if(isset($_FILES['fileToUpload']))
    $fileUploaded = $_FILES['fileToUpload'];

$fileUploadLocation = "uploads/";

if(isset($fileUploaded)) {	
	
    if(!empty($fileUploaded)) {
	if(move_uploaded_file($fileUploaded['tmp_name'], $fileUploadLocation.$fileUploaded['name'])) {
	    echo 'File uploaded successfully';
	    header('Location: index.php');
	}
	else
	    echo 'Something went wrong';
    }
    else {
	echo 'Please choose a file';
    }
}
?>
