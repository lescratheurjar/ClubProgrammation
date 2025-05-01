const menu = document.getElementById("menu");
const gameView = document.getElementById("gameView");
const gameList = document.getElementById("gameList");
const selector = document.getElementById("gameSelector");
const frame = document.getElementById("gameFrame");
const backBtn = document.getElementById("backBtn");

let games = [];

fetch("games.json")
  .then(res => res.json())
  .then(data => {
    games = data;

    // Remplir le menu principal
    games.forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.textContent = game.name;
      card.onclick = () => openGame(game.id);
      gameList.appendChild(card);
    });

    // Remplir le select en haut
    games.forEach(game => {
      const option = document.createElement("option");
      option.value = game.id;
      option.textContent = game.name;
      selector.appendChild(option);
    });

    selector.addEventListener("change", (e) => {
      loadGame(e.target.value);
    });
  });

function openGame(id) {
  menu.classList.add("hidden");
  gameView.classList.remove("hidden");
  selector.value = id;
  loadGame(id);
}

function loadGame(id) {
  frame.src = `https://turbowarp.org/${id}/embed?autoplay&fullscreen`;
}

backBtn.addEventListener("click", () => {
  gameView.classList.add("hidden");
  menu.classList.remove("hidden");
  frame.src = "";
});
