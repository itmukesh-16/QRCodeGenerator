    var QrCode = '';

    function getQR() {
      var imgId = document.getElementById("imgQrCode");
      var txtSearchBox = document.getElementById("txtSearchBox").value;
      
      if(txtSearchBox){
        var api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
      imgId.src = api + encodeURIComponent(txtSearchBox);
      QrCode = api + encodeURIComponent(txtSearchBox);
      }
      else{
        alert("enter some text to convert");
      }
    
    }

    function btndownload() {
      var req = new XMLHttpRequest();
      req.open("GET", QrCode, true);
      req.responseType = "blob";

      req.onload = function() {
        if (req.status === 200) {
          var blob = req.response;
        //   creates a link for the url 
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = "QR  "+ document.getElementById("txtSearchBox").value ;
        //   append a anchore tag in body 
          document.body.appendChild(a);
        //   click the  link 
          a.click();
        //   remove the Url Object 
          window.URL.revokeObjectURL(url);
        }
      };

      req.send();
    }