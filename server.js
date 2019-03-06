var io = require('socket.io');
var http = require('http');

var app = http .createServer();
var io = io.listen(app);
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out');//up
var LED2 = new Gpio(17, 'out');//
var LED3 = new Gpio(27, 'out');
var LED4 = new Gpio(22, 'out');  
//var blinkInterval = setInterval(blinkLED, 250);
app.listen(8080);

io.sockets.on('connection', function (socket) {
	socket.on('eventServer', function (data) {

		LED.writeSync(0)
        LED2.writeSync(0)
        LED3.writeSync(0)
        LED4.writeSync(0)

    data.forEach(function (value, key, data) {
      //console.log(value);
      if (value == 37) {
                 LED4.writeSync(1);//left
            } else if (value == 38){//up
                LED.writeSync(1)
      } else if (value == 39){//right
                LED3.writeSync(1);
            } else if (value == 40){//down
                LED2.writeSync(1);
            }
    });

  }
)}
  )
