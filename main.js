img = "";
status="";
objects=[];

function preload(){
  img = loadImage('l.jpg');
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetection = ml5.objectDetector('cocossd' , modelLoded)
  document.getElementById("status").innerHTML = "STATUS : DETECTING OBJECT";
}


function draw() {
  image(img, 0, 0, 640, 420);
  if (status !="") {
  for (i = 0; i < objects.length; i++) {
    document.getElementById("status").innerHTML = "STATUS : OBJECT DETECTED";
    fill("#00ff00");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label +"" +percent +"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("#00ff00");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
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

objects= result;

}