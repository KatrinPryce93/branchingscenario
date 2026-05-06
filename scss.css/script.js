const sceneContainer = document.getElementById("scene");

const scenes = {
  start: {
    image: "img/mappe.png",
    background: "start-bg",
    choices: [
      { text: "Start sag", nextScene: "scene1" }
    ]
  },

  scene1: {
    image: "img/scene.1.png",
    background: "cork-bg",
    choices: [
      { text: "Log ind via linket", nextScene: "scene2A" },
      { text: "Gå direkte til skolens hjemmeside", nextScene: "scene2B" }
    ]
  },

  scene2A: {
    image: "img/scene.2a.png",
    background: "cork-bg",
    choices: [
      { text: "Se om det går over af sig selv", nextScene: "endingA1" },
      { text: "Skift kode + kontakt IT-support", nextScene: "endingA2" }
    ]
  },

  scene2B: {
    image: "img/scene.2b.png",
    background: "cork-bg",
    choices: [
      { text: "Indtast koden på siden fra mailen", nextScene: "endingB1" },
      { text: "Ignorér og log ind normalt senere", nextScene: "endingB2" }
    ]
  },

  endingA1: {
    image: "img/slutning.a1.png",
    background: "cork-bg",
    choices: [
      { text: "Prøv igen", nextScene: "start" }
    ]
  },

  endingA2: {
    image: "img/slutning.a2.png",
    background: "cork-bg",
    choices: [
      { text: "Prøv igen", nextScene: "start" }
    ]
  },

  endingB1: {
    image: "img/slutning.b1.png",
    background: "cork-bg",
    choices: [
      { text: "Prøv igen", nextScene: "start" }
    ]
  },

  endingB2: {
    image: "img/slutning.b2.png",
    background: "cork-bg",
    choices: [
      { text: "Prøv igen", nextScene: "start" }
    ]
  }
};

function renderScene(sceneKey) {
  const currentScene = scenes[sceneKey];

  document.body.className = currentScene.background;
  sceneContainer.className = `scene scene--${sceneKey}`;

  const buttonsHTML = currentScene.choices.map(choice => `
    <button class="choice-btn" data-next="${choice.nextScene}">
      ${choice.text}
    </button>
  `).join("");

  sceneContainer.innerHTML = `
    <div class="scene__wrapper">
      <img class="scene__image" src="${currentScene.image}" alt="">

      <div class="scene__buttons">
        ${buttonsHTML}
      </div>
    </div>
  `;

  const buttons = document.querySelectorAll(".choice-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      renderScene(button.dataset.next);
    });
  });
}

renderScene("start");