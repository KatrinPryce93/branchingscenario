const scenes = {
    start: {
        title: "Forside",
        text: "Intro til det forgrenede scenarie.",
        choices: [
            { text: "Start efterforskning", nextScene: "scene1" }
        ]
    },

    scene1: {
        title: "Scene 1",
        text: "Du skal nu vælge, hvad du vil gøre.",
        choices: [
            { text: "Valg 2A", nextScene: "scene2A" },
            { text: "Valg 2B", nextScene: "scene2B" }
        ]
    },

    scene2A: {
        title: "Scene 2A",
        text: "Du valgte vej 2A. Hvad gør du nu?",
        choices: [
            { text: "Valg A1", nextScene: "endingA1" },
            { text: "Valg A2", nextScene: "endingA2" }
        ]
    },

    scene2B: {
        title: "Scene 2B",
        text: "Du valgte vej 2B. Hvad gør du nu?",
        choices: [
            { text: "Valg B1", nextScene: "endingB1" },
            { text: "Valg B2", nextScene: "endingB2" }
        ]
    },

    endingA1: {
        title: "Slutning A1",
        text: "Dette er slutning A1.",
        choices: [
            { text: "Prøv igen", nextScene: "start" }
        ]
    },

    endingA2: {
        title: "Slutning A2",
        text: "Dette er slutning A2.",
        choices: [
            { text: "Prøv igen", nextScene: "start" }
        ]
    },

    endingB1: {
        title: "Slutning B1",
        text: "Dette er slutning B1.",
        choices: [
            { text: "Prøv igen", nextScene: "start" }
        ]
    },

    endingB2: {
        title: "Slutning B2",
        text: "Dette er slutning B2.",
        choices: [
            { text: "Prøv igen", nextScene: "start" }
        ]
    }
};

const title = document.querySelector(".scene__title");
const text = document.querySelector(".scene__text");
const buttonsContainer = document.querySelector(".scene__buttons");

function showScene(sceneId) {
    const scene = scenes[sceneId];

    title.textContent = scene.title;
    text.textContent = scene.text;

    buttonsContainer.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.classList.add("choice-btn");

        button.addEventListener("click", function () {
            showScene(choice.nextScene);
        });

        buttonsContainer.appendChild(button);
    });
}

showScene("start");