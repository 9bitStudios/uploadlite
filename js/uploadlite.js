// UploadLite.js 0.0.1
// (c) 2013 9bit Studios


var UploadLite = window.UploadLite = (function(document){
    
    /**** CONFIG ****/
    
    var Config = {
	VERSION: '0.0.1'
    };         
    
    var fileInput;
    
    var init = function(id) {
	
	fileInput = document.getElementById(id);
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
	
	insertAfter(progress,fileInput);
	insertAfter(type,fileInput);
	insertAfter(size,fileInput);
	insertAfter(name,fileInput);
	
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
	
	var file = document.getElementById('fileToUpload').files[0];
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
	
	var fd = new FormData();
	fd.append("fileToUpload", document.getElementById('fileToUpload').files[0]);
	var xhr = new XMLHttpRequest();
	xhr.upload.addEventListener("progress", uploadProgress, false);
	xhr.addEventListener("load", uploadComplete, false);
	xhr.addEventListener("error", uploadFailed, false);
	xhr.addEventListener("abort", uploadCanceled, false);
	xhr.open("POST", "index.php");
	xhr.send(fd);
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
