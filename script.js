// =========================
// MOT DE PASSE
// =========================

const PASSWORD = "jet'aimeC+E";

const passwordScreen = document.getElementById("password-screen");
const mainContent = document.getElementById("main-content");
const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

function unlockSite() {

    if (passwordInput.value === PASSWORD) {

        passwordScreen.style.display = "none";
        mainContent.classList.remove("hidden");

        startCounter();
        revealSections();

    } else {

        error.textContent = "Mot de passe incorrect ❤️";

        passwordInput.value = "";

    }

}

unlockBtn.addEventListener("click", unlockSite);

passwordInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        unlockSite();

    }

});

// =========================
// COMPTEUR
// =========================

function startCounter(){

    const startDate = new Date("2025-08-18T00:00:00");

    function updateCounter(){

        const now = new Date();

        const diff = now - startDate;

        const days = Math.floor(diff / (1000*60*60*24));

        const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));

        const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));

        const seconds = Math.floor((diff % (1000*60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

    }

    updateCounter();

    setInterval(updateCounter,1000);

}

// =========================
// APPARITION AU SCROLL
// =========================

function revealSections(){

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    document.querySelectorAll(".fade").forEach(section=>{

        observer.observe(section);

    });

}

// =========================
// COEURS QUI MONTENT
// =========================

const heartsContainer = document.getElementById("hearts-container");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "%";

    heart.style.bottom = "-40px";

    heart.style.fontSize = (15 + Math.random()*30) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,450);

// =========================
// POPUP LETTRE
// =========================

const modal = document.getElementById("letterModal");

const openLetter = document.getElementById("openLetter");

const closeLetter = document.getElementById("closeLetter");

const letterText = document.getElementById("letterText");

openLetter.addEventListener("click",()=>{

    modal.style.display="flex";

    startTyping();

});// =========================
// LETTRE ANIMÉE
// =========================

const message = `Ma princesse,

Si tu lis ces mots, c'est que tu as ouvert ce petit endroit que j'ai créé rien que pour toi.

Depuis le 18 août 2025, ma vie est devenue plus belle grâce à toi. Chaque journée passée avec toi est un souvenir que je garde précieusement.

Merci d'être toujours là, de me faire rire, de me supporter même quand je suis chiant, et surtout de m'aimer comme tu le fais.

J'espère qu'on continuera à créer encore des milliers de souvenirs ensemble, à voyager, rire, se prendre dans les bras et profiter de chaque instant.

Je voulais que ce site soit une petite surprise pour te montrer à quel point tu comptes pour moi.

Je t'aime plus que les mots ne pourront jamais le décrire.

Joyeux anniversaire de nos 1 an mon amour. ❤️

Pour toujours,

Clément ❤️`;

let index = 0;
let typingStarted = false;

function startTyping(){

    if(typingStarted) return;

    typingStarted = true;

    letterText.innerHTML = "";

    function type(){

        if(index < message.length){

            letterText.innerHTML += message.charAt(index);

            index++;

            setTimeout(type,35);

        }

    }

    type();

}

// =========================
// FERMETURE POPUP
// =========================

closeLetter.addEventListener("click",()=>{

    modal.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target === modal){

        modal.style.display="none";

    }

});