// charecter assign value
let charecter =document.getElementById("charecter");
let charecterBottom = parseInt(window.getComputedStyle(charecter).getPropertyValue("bottom"));
let charecterRight = parseInt(window.getComputedStyle(charecter).getPropertyValue("right"));
let charecterWidth = parseInt(window.getComputedStyle(charecter).getPropertyValue("width"));

// ground assign value

let ground = document.getElementById("ground");
let groundHeight = parseInt(window.getComputedStyle(ground).getPropertyValue("height"));
let groundBottom = parseInt(window.getComputedStyle(ground).getPropertyValue("bottom"));

// other value 
let isJupming = false;
let uptime;
let downTime;

function jump(){
    if(isJupming)return;
    uptime = setInterval(()=>{
        if(charecterBottom >=groundHeight + 250){
            clearInterval(uptime);

           downTime = setInterval(() => {

                if(charecterBottom<=groundHeight+10){
                    clearInterval(downTime);
                    isJupming = false;
                }

                charecterBottom -=10;
                charecter.style.bottom = charecterBottom + "px";
                
            }, 20);

        }
        charecterBottom +=10;
        charecter.style.bottom = charecterBottom + "px";
        isJupming = true;
    },20)
}


function control(e){
    
    if(e.key == "ArrowUp" || e.key == " "){
        jump();
    }
}
document.addEventListener('keydown',control);


// obstacle
let count = 0;
function GenrateObstacle() {

    let obstacles = document.querySelector(".obstacles");
    let obstacle = document.createElement("span");
    obstacle.setAttribute("class","obstacle");
    obstacles.appendChild(obstacle);
    
    count = count+1;

    let obstacleRight = -30;
    let obstaclebottom = 100;
    let obstacleWidth = 30;
    let obstacleHeight = Math.floor(Math.random() * 50) + 50; 
    
    function moveObstacle(){
        obstacleRight +=5;
        obstacle.style.right = obstacleRight + "px";
        obstacle.style.height = obstacleHeight + "px"; 
            
    }

    let obstacleInterval = setInterval(moveObstacle,20);
    let obstacleIntervalRM = setInterval(removeElement,3500);
    let obstacleTimeout = setInterval(GenrateObstacle,3000);
   

    function removeElement() {
       obstacle.remove();
    }

    
}

GenrateObstacle();