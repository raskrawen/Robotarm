var socket;

function setup() {
    var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
    foo.continuous = true; // do continuous recognition
    	foo.interimResults = true; // allow partial recognition (faster, less accurate)
  foo.onResult = showResult; // bind callback function to trigger when speech is recognized
  foo.start(); // start listening


  function showResult()
  {
     console.log(foo.resultString); // log the result
     if (foo.resultString == "up") {
         //turnUp();
         move(10,5);
     }
     if (foo.resultString == "down") {
         //turnDown();
         move(10,-5);
     }
     if (foo.resultString == "close") {
         move(9,2);
     }
     if (foo.resultString == "open") {
         move(9,-2);
     }
     if (foo.resultString == "left") {
         move(11,5);
     }
     if (foo.resultString == "right") {
         move(11,-5);
     }
     if (foo.resultString == "move") {
         move(10,5);
     }
}

  createCanvas(1000,1000);
  socket = io.connect('http://localhost:3000');
  //sendNumber();

  button = createButton('Turn up');
  button.position(10, 50);
  //button.mousePressed(turnUp);
  button.mousePressed(turnUp); //mousePressed callback does not take arguments

  button = createButton('Turn down');
  button.position(10, 100);
  button.mousePressed(turnDown);

  button = createButton('Close');
  button.position(10, 200);
  button.mousePressed(close);

  button = createButton('Open');
  button.position(10, 250);
  button.mousePressed(open);

  button = createButton('Left');
  button.position(10, 350);
  button.mousePressed(left);

  button = createButton('Right');
  button.position(10, 400);
  button.mousePressed(right);

}

function move(servoNumber, increment) {
    console.log("moving");
    var data = {
        "servoNumber": servoNumber,
        "increment": increment
    };
    console.log(data.servoNumber);
    socket.emit('moving', data);
}

function turnUp() {
    console.log("moving up");
    move(10,5);
}

function turnDown() {
    console.log("moving down");
    move(10,-5);
}

function close() {
    console.log("closing");
    move(9,2);
}
function open() {
    console.log("opening");
    move(9,-2);
}

function left() {
    console.log("turning left");
    move(11,5);
}
function right() {
    console.log("turning right");
    move(11,-5);
}


function draw() { }

/*function sendNumber() {
    var angle = 150;
    var data = {angle};
    console.log("sending");
    socket.emit('angle2', data);
}*/
