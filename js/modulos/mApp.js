
const createQR = (id,nodo='qr')=>{
    //Genera QR https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js
    var qr = new QRious({
        element:document.getElementById(`${nodo}`),
        background: '#fff',
        backgroundAlpha: 1,
        foreground: 'black',
        foregroundAlpha: 0.9,
        level: 'H',
        padding: 10,
        size: 500,
        value: `${id}`
    });
}

const scannerQR = () =>{
    //Permite escanear el QR https://rawgit.com/schmich/instascan-builds/master/instascan.min.js
    let scanner = new Instascan.Scanner({ video: document.querySelector('video') });
    scanner.addListener('scan', function (content) {
        console.log(content);
    });
    
    navigator.mediaDevices.getUserMedia({ video: true })
          .then(function() {
              Instascan.Camera.getCameras().then(function (cameras) {
                if (cameras.length > 0) {
                  scanner.start(cameras[0]);
                } else {
                  console.error('No cameras found.');
                }
              }).catch(function (e) {
                console.error(e);
              });
           
          })
          .catch(function(err) {
            console.log("Ocurrió un error al intentar acceder a la cámara: " + err);
          });

}

const sendNotification = () =>{
  console.log("Funciona")
}

export {
    createQR,
    scannerQR,
    sendNotification
}