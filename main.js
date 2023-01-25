difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(400,400);
    canvas.position(560,120)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded!!")
}

function gotPoses(results){
    if(results.length > 0){
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background("#fcba03");
    textSize(difference);
    fill("#25a848")
    text("SAM", 50, 400);
}