nosex = 0;
nosey = 0;

function preload()
{
   mustach_nose = loadImage('https://i.postimg.cc/HxB6hpqL/mustach.png');
}

function setup()
{
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function draw()
{
  image(video,0,0,300,300);
  image(mustach_nose,nosex,nosey,30,30);
}

function take_snapshot()
{
    save('myImage.jpg');
}
function modelLoaded()
{
  console.log('poseNet model is initialized');
}

function gotPoses(results)
{
  if(results.length>0){
    console.log(results);
    nosex = results[0].pose.nose.x-15;
    console.log("nosex="+nosex);
    nosey =results[0].pose.nose.y;
      console.log("nosey="+nosey);
  }
}