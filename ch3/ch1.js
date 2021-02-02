var net = require('net');
var HOST = 'coin.werapun.com';
var PORT = 6969;

var client = new net.Socket();
client.connect(PORT, HOST, function() {
   console.log('CONNECTED TO: ' + HOST + ':' + PORT);
   client.write('6135512015');   //ส่งข้อมูลไปserver  
});

client.on('data', function(data) {
   console.log('DATA: ' + data);
   if(data.toString()==='OK'||data.toString()==='WRONG'){
      let ans=Math.floor(Math.random()*(71-50)+50);   //random 50 - 71   //console.log(Math.floor(Math.random() * (stop - start)) + start); 
      ans = parseInt(ans);
      client.write(ans.toString());
   }else if(data.toString()==='BINGO'){
      client.destroy();
   }
});


// Add a 'close' event handler for the client socket
client.on('close', function() {
   console.log('Connection closed');
});