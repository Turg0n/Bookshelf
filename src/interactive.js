const notFound = document.querySelector(".not-found-container");
const gameToggle = document.querySelector(".game-btn")
const gameContainer = document.querySelector(".interactive-container")
let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "../img/interactive/bird.png";
bg.src = ".img/interactive/bg.png";
fg.src = "./img/interactive/bird_fg.png";
pipeUp.src = "//img/interactive/pipeUp.png";
pipeBottom.src = "./img/interactive/pipeBottom.png";

let fly = new Audio();
let score_audio = new Audio();

fly.src = "./audio/fly.mp3";
score_audio.src = "./audio/score.mp3";

let gap = 130;
let pipeShift = 2;

document.addEventListener("keydown", moveUp);

function moveUp() {
 yPos -= 35;
 fly.play();
}

let pipe = [];

pipe[0] = {
 x : cvs.width,
 y : 0
}

let score = 0;
let xPos = 10;
let yPos = 100;


let grav = 1;
let step = 2;

function draw() {
    ctx.drawImage(bg, 0, 0);

    for(var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;

        if(pipe[i].x == 50) {
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

        if(xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
            || yPos + bird.height >= cvs.height - fg.height
            || yPos <= 0) {
            location.reload();
            cancelAnimationFrame(animationId);
            return;
        }

        if(pipe[i].x == 5) {
            score++;
            score_audio.play();
        }
        if (score === 5) {
            document.location.href = '/'
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Score: " + score, 10, cvs.height - 20);

    animationId = requestAnimationFrame(draw);
}

pipeBottom.onload = draw;

gameToggle.addEventListener("click", () => { 
  notFound.classList.add('visually-hidden');
  gameContainer.classList.remove('visually-hidden');
} ) 

 
