// charecter assign value
let charecter = document.getElementById("charecter");
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
let value = 0;
let downTime;
let score = document.getElementById("score");
let click = document.getElementById("click");

function jump() {
    if (isJupming) return;
    uptime = setInterval(() => {
        if (charecterBottom >= groundHeight + 250) {
            clearInterval(uptime);

            downTime = setInterval(() => {

                if (charecterBottom <= groundHeight + 10) {
                    clearInterval(downTime);
                    isJupming = false;
                }

                charecterBottom -= 10;
                charecter.style.bottom = charecterBottom + "px";

            }, 20);

        }
        charecterBottom += 10;
        charecter.style.bottom = charecterBottom + "px";
        isJupming = true;
    }, 20)
}


function control(e) {
    console.log(e.key);
    if (e.key == "touchstart" || e.key == " " || e.key == "ArrowUp") {
        jump();
    }
    jump();
}
document.addEventListener('touchstart', control);
document.addEventListener('keydown', control);
click.addEventListener("click",control);

// obstacle
let count = 0;
function GenrateObstacle() {

   

    let obstacles = document.querySelector(".obstacles");
    let obstacle = document.createElement("span");
    obstacle.setAttribute("class", "obstacle");
    obstacles.appendChild(obstacle);

    let obstacleRight = -30;
    let obstaclebottom = 100;
    let obstacleWidth = 30;
    let obstacleHeight = Math.floor(Math.random() * 50) + 50;
    function moveObstacles() {
        obstacleRight += 5;
        obstacle.style.right = obstacleRight + "px";
        obstacle.style.height = obstacleHeight + "px";
        
        if(charecterRight >= obstacleRight-charecterWidth && 
            charecterRight<=obstacleRight+obstacleWidth&&
            charecterBottom<=obstaclebottom+obstacleHeight){
                clearInterval(Gen_id);
                clearInterval(move_id);
                alert("GameOver:"+"Your score is :"+value);
                location.reload();
            }

        if(obstacle.style.right==1500 +"px"){
            // obstacle.style.visibility = "hidden";
            obstacleRight = 0;
            console.log("work");
        }
    }
  
    count = count +10000;    
    let move_id = setInterval(moveObstacles, 20);
    let Gen_id = setInterval(GenrateObstacle,count);
    
   

}

GenrateObstacle();

function scoreChange(){
    score.innerHTML="score:"+value;
    value=value+1;
}
let score_id =setInterval(scoreChange,100);