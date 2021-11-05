function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(400,190);
    video = createCapture(VIDEO);
    video.hide();
    tint_filter = "";
}

function draw() {
    image(video, 160,120,320,240);
    tint(tint_filter);

    fill(245, 245, 66);
    stroke(0,0,0);
    //rect(25,25,60,20);
    circle(100,75,60);
    circle(100,400,60);
    circle(540,75,60);
    circle(540,400,60);







    fill(41, 123, 255);
    stroke(0,0,0);
    rect(130,66,380,20);
    rect(130,391,380,20);
    rect(90,105,20,265);
    rect(529,105,20,265);
}

function take_snapshot(){
    save('urpic.png');
}

function apply_filter(){
    tint_filter = document.getElementById("col_input").value;
}  