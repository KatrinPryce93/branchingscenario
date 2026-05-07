// ==============================
// HENTER CONTAINER TIL SCENER
// ==============================

const sceneContainer = document.getElementById("scene");


// ==============================
// ALLE SCENER I SPILLET
// ==============================
// Her opbygges hele branching scenariet.
// Hver scene har et billede, baggrund og valg.

const scenes = {

  // STARTSIDE
  start: {
    image: "img/mappe.png",
    background: "start-bg",

    // her starter brugeren selve scenariet
    choices: [
      { text: "Start sag", nextScene: "scene1" }
    ]
  },

  // SCENE 1
  scene1: {
    image: "img/scene.1.png",
    background: "cork-bg",

    // brugeren vælger mellem de 2 muligheder
    choices: [
      { text: "Log ind via linket", nextScene: "scene2A" },
      { text: "Gå direkte til skolens hjemmeside", nextScene: "scene2B" }
    ]
  },

  // SCENE 2A
  scene2A: {
    image: "img/scene.2a.png",
    background: "cork-bg",

    // her fører valgene til 2 forskellige slutnigner
    choices: [
      { text: "Se om det går over af sig selv", nextScene: "endingA1" },
      { text: "Skift kode + kontakt IT-support", nextScene: "endingA2" }
    ]
  },

  // SCENE 2B
  scene2B: {
    image: "img/scene.2b.png",
    background: "cork-bg",

    choices: [
      { text: "Indtast koden på siden fra mailen", nextScene: "endingB1" },
      { text: "Ignorér og log ind normalt senere", nextScene: "endingB2" }
    ]
  },

  // SLUTNING A1
  endingA1: {
    image: "img/slutning.a1.png",

    // sticky notes bliver kun vist på slutningerne
    sticky: "img/stickynote.a1.png",

    background: "cork-bg",

    choices: [
      { text: "Prøv igen", nextScene: "start" }
    ]
  },

  // SLUTNING A2
  endingA2: {
    image: "img/slutning.a2.png",
    sticky: "img/stickynote.a2.png",
    background: "cork-bg",

    choices: [
      { text: "Prøv igen", nextScene: "start" }
    ]
  },

  // SLUTNING B1
  endingB1: {
    image: "img/slutning.b1.png",
    sticky: "img/stickynote.b1.png",
    background: "cork-bg",

    choices: [
      { text: "Prøv igen", nextScene: "start" }
    ]
  },

  // SLUTNING B2
  endingB2: {
    image: "img/slutning.b2.png",
    sticky: "img/stickynote.b2.png",
    background: "cork-bg",

    choices: [
      { text: "Prøv igen", nextScene: "start" }
    ]
  }
};


// ==============================
// FUNKTION SOM VISER SCENER
// ==============================
// Funktionen skifter scene alt efter
// hvad brugeren klikker på.

function renderScene(sceneKey) {

  // henter den aktuelle scene
  const currentScene = scenes[sceneKey];

  // skifter body baggrund
  document.body.className = currentScene.background;

  // giver scene sin egen class
  sceneContainer.className = `scene scene--${sceneKey}`;

  // laver alle knapper dynamisk
  // fandt hjælp til map/join metode på mdn web docs
  const buttonsHTML = currentScene.choices.map(choice => `

    <button class="choice-btn" data-next="${choice.nextScene}">
      ${choice.text}
    </button>

  `).join("");

  // indsætter HTML indhold dynamisk
  sceneContainer.innerHTML = `

    <div class="scene__wrapper">

      ${
        currentScene.sticky

          // sticky notes vises kun hvis der findes en sticky
          ? `<img class="scene__sticky" src="${currentScene.sticky}" alt="">`

          : ""
      }

      <img 
        class="scene__image" 
        src="${currentScene.image}" 
        alt=""
      >

      <div class="scene__buttons">
        ${buttonsHTML}
      </div>

    </div>
  `;

  // finder alle knapper
  const buttons = document.querySelectorAll(".choice-btn");

  // eventlistener på alle valg
  buttons.forEach(button => {

    button.addEventListener("click", () => {

      // skifter til næste scene
      renderScene(button.dataset.next);

    });

  });

}


// starter scenariet på forsiden
renderScene("start");


// ==============================
// BAGGRUNDS MUSIK
// ==============================
// musik starter først ved klik
// fordi chrome ellers blokere autoplay lol

const music = document.getElementById("bg-music");

if (music) {

  // skruer lidt ned for musikken
  music.volume = 0.18;

  // starter musik ved første klik
  document.body.addEventListener("click", () => {

    music.play();

  }, { once: true });

}