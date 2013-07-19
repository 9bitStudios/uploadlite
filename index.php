<!DOCTYPE html>
<html>
<head>
<title>Upload Lite</title>
<script type="text/javascript" src="js/uploadlite.js"></script>
</head>
<body>
	
<h2>Upload Lite</h2>
<p>An ultra lightweight AJAX Upload Utility...</p>
<form id="myForm" enctype="multipart/form-data" method="post" action="post.php">
    <input id="fileToUpload" type="file" />
    <input id="uploadButton" type="button" class="button-primary" value="Upload" />        
</form>
	
<script type="text/javascript">
/* Pass in the ID's of the form, the input field, and the button so events can be set and data fields can be appended */
UploadLite.init({
    form: 'myForm',
    input: 'fileToUpload',
    button: 'uploadButton'
});
</script>

</body>
</html>	