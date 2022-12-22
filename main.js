noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 480);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

  function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }

  function gotPoses(results) {

    if(results.length > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + " difference = " + difference);
    }
  }

function draw(){
  background("pink");
  document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
  textSize(difference);
  fill("blue");
  text('Srishty', 50, 400);
}