Upload Lite
==========

Upload Lite is an ultra lightweight AJAX upload utility used for uploading files. It appends some helpful file info to the upload form and also supports upload progress percentages.

To use UploadLite, you just have to set up a form where you specify an id attribute for the form, the input file field, and the button that will be used to start the upload of a file when clicked. It's also important that you set the action attribute of the form to point to the location on your server where you want to upload the form. See the example below...

```html
<form id="myForm" enctype="multipart/form-data" method="post" action="post.php">
    <input id="fileToUpload" type="file" />
    <input id="uploadButton" type="button" class="button-primary" value="Upload" />        
</form>
```

Then immediately following the closing form tag all you have to do is add some JavaScript where you call UploadLite.init() and give it an object containing the id's of your three elements (form, input, and button). You can name your id's whatever you want, but you just have to pass the right values in to the right place. 

```javascript
<script type="text/javascript">
UploadLite.init({
    form: 'myForm',
    input: 'fileToUpload',
    button: 'uploadButton'
});
</script>
```

Upload Lite will handle the rest for you and set all the events needed for grabbing the file data and initiating the upload when the button is clicked.

### Internet Explorer 

IE9 (and lower) does not support FormData in JavaScript, which is a component that is used by UploadLite. As a fallback, if the browser is less than IE10 UploadLite will just set the form to submit the file as a regular POST. The user will not see any progress indicator or file info, but the upload should still work. No changes need to be made to any server files that process the upload.