// Her definerer vi alle scenerne i spillet (dette er "dataen" for scenariet)
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

// Her finder vi wrapperen hvor vi viser scenerne
const sceneWrapper = document.getElementById("sceneWrapper");
const body = document.body;

// Denne funktion viser en scene på siden, baseret på sceneId
function showScene(sceneId) {
    // Skift til korktavle-baggrund
    body.classList.add('cork-bg');

    const scene = scenes[sceneId];

    // Byg HTML til scenen
    let html = `<h2 class="scene__title">${scene.title}</h2>`;
    html += `<p class="scene__text">${scene.text}</p>`;
    html += `<div class="scene__buttons">`;
    scene.choices.forEach((choice, i) => {
        html += `<button class="choice-btn" data-next="${choice.nextScene}">${choice.text}</button>`;
    });
    html += `</div>`;

    sceneWrapper.innerHTML = html;

    // Tilføj event listeners til knapper
    const btns = sceneWrapper.querySelectorAll(".choice-btn");
    btns.forEach(btn => {
        btn.addEventListener("click", function () {
            const next = btn.getAttribute("data-next");
            showScene(next);
        });
    });
}

// Forside: ingen korktavle-baggrund
body.classList.remove('cork-bg');

// Tilføj event til start-knappen, så vi først viser scenariet og skifter baggrund når der klikkes
document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", function () {
            showScene("scene1");
        });
    }
});