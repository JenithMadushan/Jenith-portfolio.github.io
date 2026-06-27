/*=========================================
  JENITH MADUSHAN PORTFOLIO
  main.js
=========================================*/

/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.8s";

});


/* ===========================
   ROTATING ROLES
=========================== */

const roles = [

    "Graphic Designer",

    "Content Creator",

    "Video Editor",

    "Web Developer"

];

let roleIndex = 0;

const roleElement = document.getElementById("typing-role");

setInterval(() => {

    roleElement.style.opacity = "0";

    setTimeout(() => {

        roleIndex++;

        if (roleIndex >= roles.length)
            roleIndex = 0;

        roleElement.textContent = roles[roleIndex];

        roleElement.style.opacity = "1";

    },300);

},2500);


/* ===========================
   CUSTOM CURSOR
=========================== */

const dot = document.querySelector(".cursor-dot");

const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

window.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";

});

function animateCursor(){

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();


/* ===========================
   HOVER CURSOR EFFECT
=========================== */

document.querySelectorAll("a,.card").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        ring.style.width="70px";
        ring.style.height="70px";

        ring.style.borderColor="#00d9ff";

    });

    item.addEventListener("mouseleave",()=>{

        ring.style.width="38px";
        ring.style.height="38px";

        ring.style.borderColor="rgba(255,255,255,.4)";

    });

});


/* ===========================
   SCROLL REVEAL
=========================== */

const reveals = document.querySelectorAll(".card");

function revealCards(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        if(top < trigger){

            card.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealCards);

revealCards();


/* ===========================
   CARD TILT
=========================== */

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height/2)/18;

        const rotateY = (x - rect.width/2)/18;

        card.style.transform =

        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

});


/* ===========================
   PROFILE PARALLAX
=========================== */

const profile = document.querySelector(".profile");

window.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth/2 - e.clientX)/60;

    let y = (window.innerHeight/2 - e.clientY)/60;

    profile.style.transform =

    `translate(${x}px,${y}px)`;

});


/* ===========================
   HERO PARALLAX
=========================== */

window.addEventListener("scroll",()=>{

    const scroll = window.scrollY;

    document.querySelector(".gradient").style.transform =

    `translateY(${scroll*0.15}px)`;

});


/* ===========================
   SOCIAL BUTTON GLOW
=========================== */

document.querySelectorAll(".socials a").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 0 25px rgba(0,217,255,.5)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="none";

    });

});


/* ===========================
   PAGE TITLE EFFECT
=========================== */

const title = document.title;

window.addEventListener("blur",()=>{

    document.title = "👋 Come Back | Jenith Portfolio";

});

window.addEventListener("focus",()=>{

    document.title = title;

});


/* ===========================
   SCROLL TO TOP
=========================== */

window.addEventListener("keydown",(e)=>{

    if(e.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});


console.log("🔥 Portfolio Loaded Successfully");
