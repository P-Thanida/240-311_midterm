var net = require('net');
var HOST = '127.0.0.1'; //'localhost'
var PORT = 6969;    //'port'
var i = 0;
net.createServer(function(sock) {
//เรียกใช้เมื่อมีการเชื่อมต่อมา
  console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
let answer = Math.floor(Math.random() * 21);
//ฟังก์ชั่นรับข้อมูล
      sock.on('data', function(data) {
//เมื่อมีข้อมูลถูกส่งมา         
  console.log('DATA ' + sock.remoteAddress + ': ' + data);
var data1 = data.length;
 
    if (data1 == 10 ) {
      sock.write('OK');
        console.log(`${answer}`);     
   
    }
   
    else if (data.toString() ==  answer ) {
           sock.write('BINGO');
      sock.destroy();
    }

    else if (data.toString() != answer ) {
      if(i <= 4){
        sock.write('WRONG'); 
        i++; 
      }
      else{
         i = 0;
         sock.destroy();
      }
      
    }

    else if (data1 != 10 ) {
        sock.write('Wrong username');
      sock.destroy();
    }
    
// sock.write('OK "' + data + '"');
    }); 
      sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
//    sock.on('error', function(err)
//    )
}).listen(PORT, HOST);
      console.log('Server listening on ' + HOST +':'+ PORT);