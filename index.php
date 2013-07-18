<?php 

if(isset($_FILES['fileToUpload']))
    $fileUploaded = $_FILES['fileToUpload'];

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

<!DOCTYPE html>
<html>
<head>
<title>Upload Lite</title>
<script type="text/javascript" src="js/uploadlite.js"></script>
</head>
<body>
	
<h2>Upload Lite</h2>
<p>An ultra lightweight AJAX Upload Utility...</p>
<form id="form1" enctype="multipart/form-data" method="post" action="upload.php">
    <label for="fileToUpload">Select a File to Upload</label><br />
    <input type="file" name="fileToUpload" id="fileToUpload" onchange="UploadLite.fileStatus();"/>
    <div id="fileName"></div>
    <div id="fileSize"></div>
    <div id="fileType"></div>
    <input type="button" class="button-primary" onclick="UploadLite.upload()" value="Upload" />
    <div id="progressNumber"></div>
</form>
	
</body>
</html>	