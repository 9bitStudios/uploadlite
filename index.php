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
<form id="form1" enctype="multipart/form-data" method="post" action="index.php">
    <label for="fileToUpload">Select a File to Upload</label><br />
    <input id="fileToUpload" type="file" name="fileToUpload" />
    <input id="uploadButton" type="button" class="button-primary" value="Upload" />        
</form>
	
<script type="text/javascript">
/* Pass in the ID's of the form, the input field, and the button so events can be set and data fields can be appended */
UploadLite.init({
    form: 'form1',
    input: 'fileToUpload',
    button: 'uploadButton'
});
</script>

</body>
</html>	