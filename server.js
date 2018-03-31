/*
version 1.5
comes with public/sketch_servos.js
run from prompt in rkwnode folder by "node server.js"
generic servos stored in array.
one function moves all servos.
*/
//web server code:
var express = require("express");
var app = express();
var server = app.listen(3000);
app.use(express.static('public')); //access files in public folder
var socket = require("socket.io");
var io = socket(server); //a socket

io.sockets.on('connection', newConnection);
//if the server has been reset, you'll need to open a new browser-instance.
function newConnection(socket) {
    console.log('new connection : ' + socket.id);
    //socket.on('angle2', turnServo);
    //when recieving a package called "angle2" run function turnServo
    socket.on('moving', move); //when package angle3 is recieved
    /*socket.on('angle3', turnUp); //when package angle3 is recieved
    socket.on('angle4', turnDown);
    socket.on('open', open);
    socket.on('close', close);
    socket.on('left', left);
    socket.on('right', right);
    socket.on('moving', move);*/
}

// johnny five files:
var five = require("johnny-five");
var keypress = require("keypress");

/*var openCloseAngle = 150; //pin 9
var maxOpenCloseAngle = 168; // closed
var minOpenCloseAngle = 110;

var upDownAngle = 110; //pin 10
var maxUpDownAngle = 165;
var minUpDownAngle = 100;

var leftRightAngle = 80; // pin 11
var maxLeftRightAngle = 140;
var minLeftRightAngle = 20;*/

console.log("START");

class Servo {
    constructor(servoNumber, initAngle, maxAngle, minAngle) { //servo object
        this.servoNumber= servoNumber;
        this.angle= initAngle;
        this.maxAngle=maxAngle;
        this.minAngle=minAngle;
    }
}

var servoData = []; //array of server objects
servoData[9] = new Servo(9,150,168,110);
servoData[10] = new Servo(10, 110, 165, 100); //servo objects
servoData[11] = new Servo(11,80,140,20);



var board = new five.Board(
//{ port: "Com5" }
);

board.on("ready", initServo);



function initServo() {
    var led = new five.Led(13);
      // "blink" the led in 500ms
      // on-off phase periods
      led.blink(1000);
      console.log("initializing servo");
      //var servo = new five.Servo(servoData10.servoNumber);
      var servo = new five.Servo(servoData[10].servoNumber); // data from the servo10 object
      servo.to(servoData[10].angle);
      var servo = new five.Servo(9);
      servo.to(servoData[9].angle);
      var servo = new five.Servo(11);
      servo.to(servoData[11].angle);
}

function move(data) { //data comes from client with servoNumber and increment
    console.log(data.servoNumber);
    var servo = new five.Servo(data.servoNumber);
        var angle = servoData[data.servoNumber].angle + data.increment;
        if (servoData[data.servoNumber].angle>servoData[data.servoNumber].maxAngle || servoData[data.servoNumber].angle<servoData[data.servoNumber].minAngle) {
            angle = servoData[data.servoNumber].angle; //if angle is out of bounds
        }
    servoData[data.servoNumber].angle = angle; //stores new servo angle
    console.log(angle);
    servo.to(angle); //turning servo
}

/*
function turnUp() {
    upDownAngle = upDownAngle+5;
    if (upDownAngle>maxUpDownAngle) { upDownAngle = maxUpDownAngle; }
    console.log("upDownAngle = " + upDownAngle);
    var servo = new five.Servo(10);
    servo.to( upDownAngle );
}
function turnDown() {
    upDownAngle=upDownAngle-5;
    if (upDownAngle<minUpDownAngle) { upDownAngle = minUpDownAngle; }
    console.log("upDownAngle = " + upDownAngle);
    var servo = new five.Servo(10);
    servo.to( upDownAngle );
}

function close() {
    openCloseAngle = openCloseAngle+2;
    if (openCloseAngle>maxOpenCloseAngle) { openCloseAngle = maxOpenCloseAngle; }
    console.log("openCloseAngle = " + openCloseAngle);
    var servo = new five.Servo(9);
    servo.to( openCloseAngle );
}
function open() {
    openCloseAngle=openCloseAngle-2;
    if (openCloseAngle<minOpenCloseAngle) { openCloseAngle = minOpenCloseAngle; }
    console.log("openCloseAngle = " + openCloseAngle);
    var servo = new five.Servo(9);
    servo.to( openCloseAngle );
}

function left() {
    leftRightAngle = leftRightAngle+10;
    if (leftRightAngle> maxLeftRightAngle) { leftRightAngle = maxLeftRightAngle; }
    console.log("LeftRightAngle = " + leftRightAngle);
    var servo = new five.Servo(11);
    servo.to( leftRightAngle );
}
function right() {
    leftRightAngle=leftRightAngle-10;
    if (leftRightAngle<minLeftRightAngle) { leftRightAngle = minLeftRightAngle; }
    console.log("LeftRightAngle = " + leftRightAngle);
    var servo = new five.Servo(11);
    servo.to( leftRightAngle );
}


function turnServo(data) {
    console.log("recieved!!");
    console.log(data);
    console.log("turning servo");
    var servo = new five.Servo(10);
    servo.to( angle+10 ); //data.angle is 150
    servo.to( angle-10 );
}*/
