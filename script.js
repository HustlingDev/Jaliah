/* =================================
   TYPEWRITER MESSAGE
================================= */

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
    document.getElementById("typing");

let character = 0;

function typeMessage() {

    if (
        character <
        message.length
    ) {

        typingElement.textContent +=
            message.charAt(character);

        character++;

        setTimeout(
            typeMessage,
            28
        );
    }
}


/* Start after page loads */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            typeMessage,
            700
        );

    }
);


/* =================================
   LOVE LETTER
================================= */

const letterButton =
    document.getElementById(
        "openLetter"
    );

const letterCard =
    document.getElementById(
        "letterCard"
    );

letterButton.addEventListener(
    "click",
    () => {

        letterCard.classList.toggle(
            "opened"
        );

        if (
            letterCard.classList.contains(
                "opened"
            )
        ) {

            letterButton.innerHTML =
                `
                <span>My Heart Is Open</span>
                <span>❤️</span>
                `;

        } else {

            letterButton.innerHTML =
                `
                <span>Open My Heart</span>
                <span>♥</span>
                `;

        }

    }
);


/* =================================
   MUSIC
================================= */

const music =
    document.getElementById(
        "music"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );

let musicPlaying = false;


musicButton.addEventListener(
    "click",
    async () => {

        try {

            if (!musicPlaying) {

                await music.play();

                musicPlaying = true;

                musicButton.textContent =
                    "🔊";

                musicButton.classList.add(
                    "playing"
                );

                musicButton.setAttribute(
                    "aria-label",
                    "Pause music"
                );

            } else {

                music.pause();

                musicPlaying = false;

                musicButton.textContent =
                    "🎵";

                musicButton.classList.remove(
                    "playing"
                );

                musicButton.setAttribute(
                    "aria-label",
                    "Play music"
                );

            }

        } catch (error) {

            console.log(
                "Music could not be played:",
                error
            );

        }

    }
);


/* =================================
   PAUSE MUSIC WHEN TAB IS HIDDEN
   Saves battery and resources.
================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden &&
            musicPlaying
        ) {

            music.pause();

        }

    }
);
