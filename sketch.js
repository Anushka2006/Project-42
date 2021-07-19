var spaceImg, craft1, craft2, craft3, craft4, issImg;
var iss, craft, hasDocked;

function preload(){
spaceImg= loadImage("space2.jpg");
craft1= loadImage("spacecraft1.png");
craft2= loadImage("spacecraft2.png");
craft3= loadImage("spacecraft3.png");
craft4= loadImage("spacecraft4.png");
issImg= loadImage("iss.png");

}


function setup() {
  createCanvas(1400,800);
  
  craft= createSprite(575,480,50,50);
  craft.addImage(craft1);
  craft.scale=0.5;
  iss= createSprite(700, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.9;
  hasDocked=false;
}

function draw() {
  background(spaceImg);  
  
  
  if(hasDocked===false){
    
    fill("salmon");
  textSize(35);
  textFont("Algerian")
  text("*All ready for Docking folks*", 40,200);
  if(keyDown("LEFT_ARROW")){
    
    craft.x= craft.x+20;
    
    craft.addImage(craft3);
    
  }
  else if(keyDown("RIGHT_ARROW")){
    craft.x= craft.x-20;
    
    craft.addImage(craft4);
    
  }
  else if(keyDown("DOWN_ARROW")){
    craft.addImage(craft2);
  
  }
  else if(keyDown("UP_ARROW")){
    craft.y= craft.y-10
  }
  else{
    craft.addImage(craft1);
    
  }
  }

  craft.debug=false;
  
  if(craft.y===320 || craft.y===310 && craft.x===655 || craft.x===675){
    hasDocked= true;
    craft.addImage(craft1);
    craft.x= 650;
    craft.y= 320;
  }
   
  if(hasDocked===true){
    fill("salmon")
    textSize(87);
    textFont("Monotype Corsiva")
    text("Yay!Docking Successful", 285,480);
    textFont("Chiller");
    fill("white");
    textSize(95);
    text("Congratulations folks!", 350, 575);
    fill(rgb(random(90,250),random(40,50),82))
    text("#Starry_CrewRocks",325, 695);
  }


  console.log(craft.x);
  console.log(craft.y);


  drawSprites();
}