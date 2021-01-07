var tom, tomImage1,tomImage2,lasttomImage;
var jerry,jerryImage1,jerryImage2,lastjerryImage;
var backgr,backgrImage;

function preload() {
    //load the images here
    tomImage1=loadImage("tomOne.png");
    tomImage2=loadAnimation("tomTwo.png","tomThree.png");
    lasttomImage=loadImage("tomFour.png");

    jerryImage1=loadImage("jerryOne.png");
   jerryImage2=loadAnimation("jerryTwo.png","jerryThree.png");
   lastjerryImage=loadImage("jerryFour.png");

   backgrImage=loadImage("garden.png");
                    }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom=createSprite(755,357,60,120);
   jerry=createSprite(115,357,120,60);
   backgr=createSprite(275,250,1500,800);
   
   

   tom.addImage(tomImage1);
   tom.scale= 0.2;

   jerry.addImage(jerryImage1);
   jerry.scale=0.15;

   backgr.addImage(backgrImage);
   backgr.scale= 1.3;
   tom.depth= backgr.depth+1;

   backgr.depth= jerry.depth-1;

   
}

function draw() {
  
    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(tom.x-jerry.x<(tom.width-jerry.width)/2 && jerry.x-tom.x<(tom.width-jerry.width)/2 && 
    tom.y-jerry.y<(tom.height-jerry.height)/2 && jerry.y-tom.y<(tom.height-jerry.height)/2)
{
        tom.velocityX=0;
        tom.addAnimation("ss",lasttomImage);
        tom.changeAnimation("ss");
        jerry.addAnimation("aa",lastjerryImage);
        jerry.changeAnimation("aa");

}
    
    
    
    
    
    text(mouseX + ','+ mouseY,10,45);
    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
      tom.velocityX= -5;
     tom.addAnimation("catrunn",tomImage2);
     tom.changeAnimation("catrunn");

     jerry.addAnimation("ohrunn",jerryImage2);
     jerry.changeAnimation("ohrunn");

  }
    //For moving and changing animation write code here


}
