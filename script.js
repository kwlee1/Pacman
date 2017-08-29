// List of features to build 
// 1) Have JS display the world
// 2) Have Pacman move 

var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,2,1,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,1,1,1,2,1,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,1,2,1,1,2,2,2,1,1,2],
    [2,1,1,1,1,2,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]; 

var pacman = {
    x:1,
    y:1
}; 

var score = 0; 
var stepcount = 0; 

function displayWorld(){
    var output = ""; 
    for(var i = 0; i < world.length; i++){
        output += "\n<div class='row'>"
        for(var j=0; j < world[i].length; j++){
            if(world[i][j] == 2){
                output += "<div class='brick'></div>"; 
            }
            if(world[i][j] == 1){
                output += "<div class='coin'></div>"; 
            }
            if(world[i][j] == 0){
                output += "<div class='empty'></div>"; 
            }
            if(world[i][j] == 3){
                output += "<div class='cherry'></div>"
            }
        }
        output += "\n</div>"
    }
    document.getElementById('world').innerHTML = output; 
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

// transform: rotate(180deg); 

document.onkeydown = function(e){
    stepcount++; 
    if(e.keyCode == 37){
        document.getElementById('pacman').style.transform = "rotate(0deg)";
        if(world[pacman.y][pacman.x - 1] != 2){
            pacman.x--; 
        }
    }
    else if(e.keyCode == 39){
        document.getElementById('pacman').style.transform = "rotate(180deg)";
        if(world[pacman.y][pacman.x + 1] != 2){
            pacman.x++; 
        }
    }
    else if(e.keyCode == 38){
        document.getElementById('pacman').style.transform = "rotate(90deg)";
        if(world[pacman.y - 1][pacman.x] != 2){
            pacman.y--; 
        }
    }
    else if(e.keyCode == 40){
        document.getElementById('pacman').style.transform = "rotate(270deg)";
        if(world[pacman.y + 1][pacman.x] != 2){
            pacman.y++; 
        }
    }
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0; 
        score += 10; 
        displayWorld(); 
        displayScore(); 
    }
    if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0; 
        score += 50; 
        displayWorld(); 
        displayScore(); 
    }
    displayPacman(); 
    console.log("stepcount: " + stepcount); 
    var rng = Math.floor(stepcount * Math.random() % 15);
    console.log("RNG: " + rng); 
    if(rng == 7){
        world[3][10] = 3; 
        displayWorld();
    }
}

function displayScore(){
    document.getElementById('score').innerHTML = score; 
}