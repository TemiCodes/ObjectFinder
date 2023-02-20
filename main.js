status=""
function setup() {
    canvas=createCanvas(350,350)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}
function draw() {
    image(video,0,0,350,350)
}
function Start() {
    objectdetector=ml5.objectDetector("cocossd",modeloaded)
    document.getElementById("status").innerHTML = "Status: Identifying Objects"
}
function modeloaded() {
    console.log("modelisLoaded")
    status=true
}
