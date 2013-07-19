// UploadLite.js 0.0.1
// (c) 2013 9bit Studios


var UploadLite = window.UploadLite = (function(document){
    
    /**** CONFIG ****/
    
    var Config = {
	VERSION: '0.0.1'
    };         
    
    /**** Private Variables ****/
    
    var uploadForm;
    var uploadFileInput;
    var uploadName;
    var uploadButton;
    var postLocation;
    var supported = false;
    
    /**** Init ****/
    
    var init = function(obj) {
	
	// is this (ugh) lte IE9 (I think Safari doesn't have this either)?  
	if(window.FormData === undefined){
	    // just going to post the file. no cool upload effects or file info 
	    // boooo!
	    supported = false;
	} 
	else {
	    // hooray
	    supported = true;
	}	
	
	uploadForm = document.getElementById(obj['form']);
	
	// Set the name property for the input field same as id. will be used by server (e.g. $_FILES['uploadName'])
	uploadName = obj['input'];
	uploadFileInput = document.getElementById(obj['input']);
	uploadFileInput.setAttribute("name", uploadName);
	
	uploadButton = document.getElementById(obj['button']);
	postLocation = uploadForm.getAttribute("action");
	
	if(supported) {
	    uploadFileInput.setAttribute("onchange", "UploadLite.fileStatus()");
	    uploadButton.setAttribute("onclick", "UploadLite.upload()");
	}
	else 
	    uploadButton.setAttribute("onclick", "submit()");
	
	// we are suppored so we can have the cool file info
	if(supported)
	    createElements();
    }; 
    
    
    var createElements = function(){
	
	var name = document.createElement("div");
	name.setAttribute("id", "fileName");
	var size = document.createElement("div");
	size.setAttribute("id", "fileSize");
	var type = document.createElement("div");
	type.setAttribute("id", "fileType");	
	var progress = document.createElement("div");
	progress.setAttribute("id", "progressNumber");	
	
	insertAfter(progress,uploadFileInput);
	insertAfter(type,uploadFileInput);
	insertAfter(size,uploadFileInput);
	insertAfter(name,uploadFileInput);
	
    };
    
    var insertAfter = function(newElement, targetElement) {

	var parent = targetElement.parentNode;
	if(parent.lastchild == targetElement) {
	    parent.appendChild(newElement);
	} 
	else {
	    parent.insertBefore(newElement, targetElement.nextSibling);
	}
    };
    
    var fileSelected = function() {
	
	var file = uploadFileInput.files[0];
	if (file) {
	  var fileSize = 0;
	  if (file.size > 1024 * 1024)
	    fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
	  else
	    fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';

	  document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
	  document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
	  document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
	}
    };

    var uploadFile = function() {
	
	if(uploadFileInput.files[0]) {
	    var fd = new FormData();
	    fd.append(uploadName, uploadFileInput.files[0]);
	    var xhr = new XMLHttpRequest();
	    xhr.upload.addEventListener("progress", uploadProgress, false);
	    xhr.addEventListener("load", uploadComplete, false);
	    xhr.addEventListener("error", uploadFailed, false);
	    xhr.addEventListener("abort", uploadCanceled, false);
	    xhr.open("POST", postLocation);
	    xhr.setRequestHeader("Content-Type", "application/octet-stream");
	    xhr.setRequestHeader("X_FILENAME", uploadFileInput.files[0].name);
	    xhr.send(fd);
	}
	else {
	    alert('Please choose a file');
	}
    };

    var uploadProgress = function(evt) {
      if (evt.lengthComputable) {
	var percentComplete = Math.round(evt.loaded * 100 / evt.total);
	document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
      }
      else {
	document.getElementById('progressNumber').innerHTML = 'unable to compute';
      }
    };

    var uploadComplete = function(evt) {
      /* This event is raised when the server send back a response */
      console.log(evt.target.responseText);
    };

    var uploadFailed = function(evt) {
      alert("There was an error attempting to upload the file.");
    };

    var uploadCanceled = function (evt) {
      alert("The upload has been cancelled by the user or the browser dropped the connection.");
    };    
    
    /**** RETURNS ****/
    /* 
     * Revealing properties accessible outside of this module according to 
     * revealing module pattern
     */
    return {
	init: init,
	fileStatus: fileSelected,
	upload: uploadFile
    };
    
})(document);
