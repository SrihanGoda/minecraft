var canvas=new fabric.Canvas('myCanvas');

playerx=10;

playery=10;
blockwidth=30;

blockheight=30;

var playerobject="";
var blockobject="";

function playerupdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({top:playery,left:playerx});
        canvas.add(playerobject);

    
    });
}

function newimage(getimage){
    fabric.Image.fromURL(getimage, function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({top:playery,left:playerx});
        canvas.add(blockobject);

    
    });
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80')
    {
        console.log("shift and p pressed together");
        blockwidth=blockwidth + 10;
        blockheight=blockheight + 10;
        document.getElementById("currentwidth").innerHTML=blockwidth;
        document.getElementById("currentheight").innerHTML=blockheight;

    }

    if(e.shiftKey==true && keypressed=='77')
    {
        console.log("shift and m pressed together");
        blockwidth=blockwidth - 10;
        blockheight=blockheight - 10;
        document.getElementById("currentwidth").innerHTML=blockwidth;
        document.getElementById("currentheight").innerHTML=blockheight;

    }
    if(keypressed=='38'){
        Up ();
        console.log("Up");
    }
    if(keypressed=='39'){
        right ();
        console.log("right");
    }
    if(keypressed=='37'){
        left ();
        console.log("left");

       
    }
    if(keypressed=='40'){
        down ();
        console.log("down");
    }
    if(keypressed=='87'){
        console.log("w");
        newimage("wall.jpg");
    }
    if(keypressed=='89'){
        console.log("y");
        newimage("yellow_wall.png");
    }
    if(keypressed=='84'){
        console.log("t");
        newimage("trunk.jpg");
    }
    if(keypressed=='82'){
        console.log("r");
        newimage("roof.jpg");
    }
    if(keypressed=='85'){
        console.log("u");
        newimage("unique.png");
    }
    if(keypressed=='67'){
        console.log("c");
        newimage("cloud.jpg");
    }
    if(keypressed=='68'){
        console.log("d");
        newimage("dark_green.png");
    }
    if(keypressed=='71'){
        console.log("g");
        newimage("ground.png");
    }
    if(keypressed=='76'){
        console.log("l");
        newimage("light_green.png");
    }
}
function up(){
    if(playery>=0){
        playery=playery-blockheight;
         console.log("when up arrow is pressed,x=" +playerx+ " y= "+playery);
         canvas.remove(playerobject);
         playerupdate();

}
}
function down(){
    if(playery<=460){
        playery=playery+blockheight;
         console.log("when down arrow is pressed,x=" +playerx+ " y= "+playery);
         canvas.remove(playerobject);
         playerupdate();

}
}
function right(){
    if(playerx<=850){
        playerx=playerx+blockwidth;
         console.log("when up arrow is pressed,x=" +playerx+ " y= "+playery);
         canvas.remove(playerobject);
         playerupdate();

}
}
function left(){
    if(playerx>=0){
        playerx=playerx-blockwidth;
         console.log("when up arrow is pressed,x=" +playerx+ " y= "+playery);
         canvas.remove(playerobject);
         playerupdate();

}
}