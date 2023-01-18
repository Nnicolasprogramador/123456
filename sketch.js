var ball;
var bancoDeDados
var infBola

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    bancoDeDados = firebase.database()
    var positionBall = bancoDeDados.ref("ball/position")
    positionBall.on("value",readData,deuErro)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    bancoDeDados.ref("ball/position").set({
    "x" : infBola.x + x,
    "y" : infBola.y + y
    })
    
}


function readData(dadosPosition){
    infBola = dadosPosition.val();
    ball.x = infBola.x;
    ball.y = infBola.y;
}



function deuErro(){
    console.log(")(((((((((((()))))))))))):");
}