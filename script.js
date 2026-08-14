/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer =
    document.getElementById("hearts");

const heartSymbols = [
    "❤️",
    "💕",
    "💖",
    "💗",
    "💓",
    "💞",
    "💘"
];

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        15 + Math.random() * 35 + "px";

    const duration =
        5 + Math.random() * 7;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 400);


/* =========================
   ROSE PETALS
========================= */

const petalsContainer =
    document.getElementById("petals");

function createPetal() {

    const petal =
        document.createElement("div");

    petal.className = "petal";

    petal.style.left =
        Math.random() * 100 + "vw";

    const duration =
        6 + Math.random() * 8;

    petal.style.animationDuration =
        duration + "s";

    petal.style.opacity =
        .3 + Math.random() * .6;

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

setInterval(createPetal, 900);


/* =========================
   TYPEWRITER LOVE MESSAGE
========================= */

const message =
`I don't know if words will ever be enough to explain what you mean to me.

But if there is one thing I want you to know, it is this:

You are special to me.

Your smile can change my entire day.
Your presence makes ordinary moments feel beautiful.

I don't just love the moments we share.
I love the person you are.

And whenever I think about who I want beside me,
my heart keeps choosing you. ❤️`;

let index = 0;

const typing =
    document.getElementById("typing");

function typeMessage() {

    if (index < message.length) {

        typing.innerHTML +=
            message.charAt(index);

        index++;

        setTimeout(
            typeMessage,
            35
        );
    }
}

window.addEventListener(
    "load",
    () => {

        setTimeout(
            typeMessage,
            800
        );

    }
);


/* =========================
   LOVE LETTER
========================= */

function openLetter() {

    const envelope =
        document.getElementById("envelope");

    envelope.classList.toggle("open");

}


/* =========================
   MUSIC
========================= */

const music =
    document.getElementById("music");

let playing = false;

function toggleMusic() {

    if (!playing) {

        music.play();

        playing = true;

    } else {

        music.pause();

        playing = false;

    }

            }
