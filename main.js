img = "";
status="";

function preload(){
  img = loadImage('ac tv room.jpg');
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetection = ml5.objectDetector('cocossd' , modelLoded)
  document.getElementById("status").innerHTML = "STATUS : DETECTING OBJECT";
}


function draw() {
  image(img, 0, 0, 640, 420);
  fill("#00ff00");
  text("ac", 250, 50);
  noFill();
  stroke("#00ff00");
  rect(250 , 50, 200, 100 );

  fill("#00ff00");
  text("tv", 250, 170);
  noFill();
  stroke("#00ff00");
  rect( 250,170 ,200 , 100 );
  
  fill("#00ff00");
  text("stool", 250, 300);
  noFill();
  stroke("#00ff00");
  rect( 250,300 ,200 , 100 );
}

function modelLoded ()
 {
console.log("Model Loded!")
status = true;
objectDetection.detect(img, gotResult);
}

function gotResult (error, result) 
{
if (error){
console.log(error)
}
console.log(result)
}