function ImageViewer(args) {
  for(var p in args) {
    this[p] = args[p];
  }

  this.reader = new FileReader();

  function _event_handler(self, method) {
    return function() {
      method.call(self);
    }
  }

  this.reader.onloadend = _event_handler(this, this.loaded);
}

ImageViewer.prototype.load = function() {
  this.file = this.controller.files[0];
  this.reader.readAsDataURL(this.file);
}

ImageViewer.prototype.loaded = function() {
  this.view_name.value = this.file.name;
  this.view_size.value = this.file.size;
  this.view_data.value = this.reader.result.substr(0, 100); // 取前 100 個

  if (! /^image/.test(this.file.type)) {
    alert(`this is not an image file. Type:{this.file.type}`);
  }
  else {
    this.view_image.src = this.reader.result;
  }
}

var file_viewer = undefined;

function init() {
  file_viewer = new ImageViewer({
    controller: document.getElementById("file_selector"),
    view_name: document.getElementById("show_filename"),
    view_size: document.getElementById("show_filesize"),
    view_data: document.getElementById("show_data"),
    view_image: document.getElementById("show_image"),
  });
}
