function showPopup(){

  document.getElementById("popup")
  .classList.add("active");

  document.getElementById("overlay")
  .classList.add("active");
}

function closePopup(){

  document.getElementById("popup")
  .classList.remove("active");

  document.getElementById("overlay")
  .classList.remove("active");
}

function showLetter(){

  document.getElementById("letterPopup")
  .classList.add("active");

  document.getElementById("overlay")
  .classList.add("active");
}

function closeLetter(){

  document.getElementById("letterPopup")
  .classList.remove("active");

  document.getElementById("overlay")
  .classList.remove("active");
}

function moveButton(button){

  button.style.position = "relative";

  const x =
  Math.random()*80 - 40;

  const y =
  Math.random()*40 - 20;

  button.style.left =
  x + "px";

  button.style.top =
  y + "px";
}

function crazyMove(button){

  const x =
  Math.random()*300;

  const y =
  Math.random()*150;

  button.style.left =
  x + "px";

  button.style.top =
  y + "px";
}

function wrongAnswer(){

  const msg =
  document.getElementById("fullscreen-message");

  msg.innerHTML =
  "Oops Wrong Answer 😂❌";

  msg.classList.add("show");

  setTimeout(()=>{

    msg.classList.remove("show");

  },1800);
}

function showCelebration(){

  const msg =
  document.getElementById("fullscreen-message");

  msg.innerHTML =
  "YAYYYY ❤️🎉<br>Correct Answer Mumma!";

  msg.classList.add("show");

  for(let i=0;i<35;i++){

    const emoji =
    document.createElement("div");

    emoji.classList.add("fall-emoji");

    emoji.innerHTML =
    ["💖","🌸","🎉","❤️"]
    [Math.floor(Math.random()*4)];

    emoji.style.left =
    Math.random()*100 + "vw";

    emoji.style.animationDuration =
    (Math.random()*2 + 2) + "s";

    document.body.appendChild(emoji);

    setTimeout(()=>{

      emoji.remove();

    },4000);
  }

  setTimeout(()=>{

    msg.classList.remove("show");

  },2500);
}

function flipCard(card){

  card.classList.toggle("flipped");
}

function spinWheel(){

  const wheel =
  document.getElementById("wheel");

  const randomDeg =
  Math.floor(Math.random()*3600)+720;

  wheel.style.transform =
  "rotate("+randomDeg+"deg)";

  setTimeout(()=>{

    showCelebration();

  },4000);
}

document.addEventListener("mousemove",(e)=>{

  const heart =
  document.createElement("div");

  heart.classList.add("cursor-heart");

  heart.innerHTML = "💖";

  heart.style.position = "fixed";

  heart.style.left =
  e.clientX + "px";

  heart.style.top =
  e.clientY + "px";

  heart.style.pointerEvents =
  "none";

  heart.style.fontSize =
  "18px";

  heart.style.zIndex =
  "9999";

  heart.style.transition =
  "1s";

  document.body.appendChild(heart);

  setTimeout(()=>{

    heart.style.opacity = "0";

    heart.style.transform =
    "translateY(-20px)";

  },10);

  setTimeout(()=>{

    heart.remove();

  },1000);
});

function createHeart(){

  const heart =
  document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "💖";

  heart.style.left =
  Math.random()*100 + "vw";

  heart.style.fontSize =
  Math.random()*20 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(()=>{

    heart.remove();

  },6000);
}

setInterval(createHeart,400);

window.addEventListener("click",()=>{

  const music =
  document.getElementById("bg-music");

  music.play();

},{
  once:true
});

const canvas =
document.getElementById("scratchCanvas");

if(canvas){

  const ctx =
  canvas.getContext("2d");

  canvas.width = 320;
  canvas.height = 180;

  ctx.fillStyle = "#ffb6cf";

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle = "#ff2f6d";

  ctx.font = "30px Poppins";

  ctx.fillText(
    "Scratch Me 🎀",
    70,
    95
  );

  let isDrawing = false;

  canvas.addEventListener(
    "mousedown",
    ()=>{

    isDrawing = true;

  });

  canvas.addEventListener(
    "mouseup",
    ()=>{

    isDrawing = false;

  });

  canvas.addEventListener(
    "mousemove",
    (e)=>{

    if(!isDrawing) return;

    const rect =
    canvas.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    ctx.globalCompositeOperation =
    "destination-out";

    ctx.beginPath();

    ctx.arc(
      x,
      y,
     20,
     0,
     Math.PI*2
    );

    ctx.fill();
  });
}
window.addEventListener("click", () => {
document.getElementById("bg-music").play();
}, { once:true });