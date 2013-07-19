Upload Lite
==========

Upload Lite is an ultra lightweight AJAX upload utility used for uploading files asynchronously. It gives a lot of helpful file info and also supports percentage progress.

To use, you just have to set up a form where you specify an id attribute for the form, the input file field and the button that will be used to upload the form. It's also important that you set the action attribute of the form to point to whatever location on your server you want to process the data in the form. Follow the example below...

```html
<form id="myForm" enctype="multipart/form-data" method="post" action="post.php">
    <input id="fileToUpload" type="file" />
    <input id="uploadButton" type="button" class="button-primary" value="Upload" />        
</form>
```

Then after this all you have to do is call UploadLite.init() and give it an object containing the id's of your three elements (form, input, and button). You can name your id's whatever you want, you just have to pass the right values in to the right place. 

```javascript
<script type="text/javascript">
UploadLite.init({
    form: 'myForm',
    input: 'fileToUpload',
    button: 'uploadButton'
});
</script>
```

Upload Lite will handle the rest for you and set all the events.

### Internet Explorer 

IE9 and lower does not support using FormData in JavaScript. As a fallback, if the browser is less than IE10 UploadLite will just set the form to submit the file as a regular POST. No changes need to be made to any server side files.