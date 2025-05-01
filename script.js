const selector = document.getElementById("gameSelector");
const frame = document.getElementById("gameFrame");

fetch("games.json")
  .then(res => res.json())
  .then(games => {
    games.forEach(game => {
      const option = document.createElement("option");
      option.value = game.id;
      option.textContent = game.name;
      selector.appendChild(option);
    });

    function loadGame(id) {
      frame.src = `https://turbowarp.org/${id}/embed?autoplay&fullscreen`;
    }

    selector.addEventListener("change", e => loadGame(e.target.value));

    if (games.length > 0) {
      selector.value = games[0].id;
      loadGame(games[0].id);
    }
  });
