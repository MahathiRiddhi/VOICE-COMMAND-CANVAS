x = 0;
y = 0;
screenWidth = 0
screenHeight = 0
apple = ""
speakData = ""
number = ""
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
function preload() {
  apple = loadImage("apple.png")
}

function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}

recognition.onresult = function (event) {

  number = Number(content)
  console.log(event);

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
  if (Number.isInteger(number)) {
    status = true;
    draw_apple = set;
  }
  else {
    document.getElementById("status").innerHTML = "The speech has not been recognized: "
  }

}

function setup() {
  screenWidth = window.innerWidth
  screenHeight = window.innerHeight
  canvas = createCanvas(screenWidth, screenHeight - 150)
  canvas.position(100, 100)
}

function draw() {
  if (draw_apple == "set") {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for (var i = 1; i <= number; i++) {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400)
      image(apple, x, y, 50, 50)
      speak()
    }
  }

}

function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
