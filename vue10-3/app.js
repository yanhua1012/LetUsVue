var app = new Vue({
  el: '#app',
  data: {
    filename: "",
    filesize: "",
    dataURL: "",
  },
  methods:{
    onFileChange: function(e) {
      let self = this;
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }

      let getFile = files[0];
      self.filename = getFile.name;
      self.filesize = getFile.size;

      if (getFile.type.indexOf("image") == 0) {
        console.log("ok");
        this.convertImage(getFile);
      }
    },
    convertImage: function(file, maxWidth = 400, maxHeight = 400) {
      let self = this;
      return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        let img = new Image();

        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");

        img.onload = function() {
          let originWidth = this.width;
          let originHeight = this.height;
          let targettWidth = this.width;
          let targetHeight = this.height;

          let dataURL = null;
          let resultFile = null;
          
          if (originWidth > maxWidth || originHeight > maxHeight)
          {
            if (originWidth / originHeight > maxHeight / maxHeight)
            {
              // 以寬度為主
              targettWidth = maxWidth;
              targetHeight = Math.round(maxWidth * (originHeight / originWidth));
            } else {
              // 以高度為主
              targetHeight = maxHeight;
              targettWidth = Math.round(maxHeight * (originWidth / originHeight));
            }
          }

          canvas.width =  targettWidth;
          canvas.height = targetHeight;

          context.clearRect(0, 0, targettWidth, targetHeight);
          context.drawImage(img, 0, 0, targettWidth, targetHeight);

          dataURL = canvas.toDataURL('image/jpeg');
          self.dataURL = dataURL;

          resolve(dataURL);
        };

        reader.onload = function(e) {
          img.src =reader.result;
        }

        reader.readAsDataURL(file);
      });
    }
  }
});