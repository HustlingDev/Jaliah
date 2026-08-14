/* ==========================================
   BACKGROUND MUSIC
========================================== */

const music =
    document.getElementById(
        "backgroundMusic"
    );

const musicStatus =
    document.getElementById(
        "musicStatus"
    );

let musicStarted = false;


/*
    Try autoplay immediately.

    Some browsers allow this.
    Others block audible autoplay.
*/

async function startMusic() {

    if (musicStarted) {
        return;
    }

    try {

        music.volume = 0.65;

        await music.play();

        musicStarted = true;

        musicStatus.textContent = "♫";

        musicStatus.classList.add(
            "playing"
        );

    } catch (error) {

        /*
            Browser blocked autoplay.

            We wait for the user's first
            interaction instead.
        */

        console.log(
            "Autoplay blocked. Waiting for first interaction."
        );

    }
}


/*
    Try immediately.
*/

window.addEventListener(
    "load",
    () => {

        startMusic();

        startTyping();

    }
);


/*
    If autoplay was blocked,
    ANY first tap/click starts music.

    No music button required.
*/

async function startMusicFromInteraction() {

    if (musicStarted) {
        return;
    }

    try {

        music.volume = 0.65;

        await music.play();

        musicStarted = true;

        musicStatus.textContent = "♫";

        musicStatus.classList.add(
            "playing"
        );

    } catch (error) {

        console.log(
            "Music could not start:",
            error
        );

    }

}


/*
    First touch on phone.
*/

document.addEventListener(
    "touchstart",
    startMusicFromInteraction,
    {
        once: true,
        passive: true
    }
);


/*
    First click on desktop.
*/

document.addEventListener(
    "click",
    startMusicFromInteraction,
    {
        once: true
    }
);


/* ==========================================
   TYPEWRITER
========================================== */

const message = `
I don't know if words will ever be enough
to explain what you mean to me.

But there is one thing I want you to know:

You are special to me.

Your smile can change my entire day.
Your presence makes ordinary moments
feel beautiful.

I don't just love the moments we share.
I love the person you are.

And whenever I think about who I want
beside me, my heart keeps choosing you. ❤️
`;

const typingElement =
    document.getElementById(
        "typing"
    );

let character = 0;

function startTyping() {

    if (character >= message.length) {
        return;
    }

    typeMessage();

}


function typeMessage() {

    if (character < message.length) {

        typingElement.textContent +=
            message.charAt(character);

        character++;

        setTimeout(
            typeMessage,
            28
        );
    }

}


/* ==========================================
   LOVE LETTER BUTTON
========================================== */

const letterButton =
    document.getElementById(
        "openLetter"
    );

letterButton.addEventListener(
    "click",
    () => {

        letterButton.innerHTML =
            `
            My Heart Is Open ❤️
            `;

        letterButton.style.transform =
            "scale(1.03)";

        setTimeout(
            () => {
                letterButton.style.transform =
                    "";
            },
            300
        );

    }
);


/* ==========================================
   HANDLE MUSIC END/ERROR
========================================== */

music.addEventListener(
    "error",
    () => {

        musicStatus.textContent = "⚠";

        console.log(
            "Could not find All of You.mp3"
        );

    }
);
