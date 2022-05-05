function setup() { 
	 createCanvas(900, 600, SVG);
} 

function draw() { 

	let r = height * 0.6;
    background(255);
    fill("#FFFFFF");
    stroke(125);
    rect(0,0,width-1,height-1);
    noStroke();
    fill("#BC002D");
    ellipse(width*0.5, height*0.5, r, r);
	save("mySVG.svg"); // give file name
    noLoop();
} 