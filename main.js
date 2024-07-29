var video, noseX, noseY, poseNet

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600, 300);
	video.parent('gameConsole')

	poseNet = ml5.poseNet(video, modelLoaded)
	poseNet.on('pose', gotPoses)
}

function modelLoaded() {
console.log("Modelo carregado!")
}

function gotPoses(results) {
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("Nose: " + noseX + ", " + noseY);
}

function draw() {
	game()
}
