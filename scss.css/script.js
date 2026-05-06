const sceneContainer = document.getElementById("scene");

const scenes = {

  start: {
    image: "img/mappe.png",
    background: "start-bg",
    buttonClass: "start-btn",
    choices: [
      {
        text: "Start sag",
        nextScene: "scene1"
      }
    ]
  },

  scene1: {
    image: "img/scene.1.png",
    background: "cork-bg",
    pin: true,
    buttonClass: "scene1-buttons",
    choices: [
      {
        text: "Log ind via linket",
        nextScene: "scene2A"
      },
      {
        text: "Gå direkte til skolens hjemmeside",
        nextScene: "scene2B"
      }
    ]
  },

  scene2A: {
    image: "img/scene.2a.png",
    decor: "img/decor.2a.png",
    pin: true,
    background: "cork-bg",
    buttonClass: "scene2A-buttons",
    choices: [
      {
        text: "Ignorer problemet",
        nextScene: "endingA1"
      },
      {
        text: "Skift adgangskode og rapportér",
        nextScene: "endingA2"
      }
    ]
  },

  scene2B: {
    image: "img/scene.2b.png",
    decor: "img/decor.2b.png",
    pin: true,
    background: "cork-bg",
    buttonClass: "scene2B-buttons",
    choices: [
      {
        text: "Del koden",
        nextScene: "endingB1"
      },
      {
        text: "Ignorér beskeden",
        nextScene: "endingB2"
      }
    ]
  },

  endingA1: {
    image: "img/slutning.a1.png",
    sticky: "img/stickynote.a1.png",
    background: "cork-bg",
    buttonClass: "ending-btn",
    choices: [
      {
        text: "Prøv igen",
        nextScene: "start"
      }
    ]
  },

  endingA2: {
    image: "img/slutning.a2.png",
    sticky: "img/stickynote.a2.png",
    background: "cork-bg",
    buttonClass: "ending-btn",
    choices: [
      {
        text: "Prøv igen",
        nextScene: "start"
      }
    ]
  },

  endingB1: {
    image: "img/slutning.b1.png",
    sticky: "img/stickynote.b1.png",
    background: "cork-bg",
    buttonClass: "ending-btn",
    choices: [
      {
        text: "Prøv igen",
        nextScene: "start"
      }
    ]
  },

  endingB2: {
    image: "img/slutning.b2.png",
    sticky: "img/stickynote.b2.png",
    background: "cork-bg",
    buttonClass: "ending-btn",
    choices: [
      {
        text: "Prøv igen",
        nextScene: "start"
      }
    ]
  }

};

function renderScene(sceneKey) {

  const currentScene = scenes[sceneKey];

  document.body.className = currentScene.background;

  let buttonsHTML = "";

  currentScene.choices.forEach(choice => {

    buttonsHTML += `
      <button 
        class="choice-btn"
        data-next="${choice.nextScene}">
        ${choice.text}
      </button>
    `;
  });

  sceneContainer.innerHTML = `
  
    <div class="scene__wrapper">

      <img 
        class="scene__image" 
        src="${currentScene.image}"
      >

      ${
        currentScene.decor
          ? `<img class="decor" src="${currentScene.decor}">`
          : ""
      }

      ${
        currentScene.sticky
          ? `<img class="decor" src="${currentScene.sticky}">`
          : ""
      }

      ${
        currentScene.pin
          ? `<img class="pin" src="img/knappenaal.png">`
          : ""
      }

      <div class="buttons ${currentScene.buttonClass}">
        ${buttonsHTML}
      </div>

    </div>
  
  `;

  const buttons = document.querySelectorAll(".choice-btn");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const nextScene = button.dataset.next;

      renderScene(nextScene);

    });

  });

}

renderScene("start");