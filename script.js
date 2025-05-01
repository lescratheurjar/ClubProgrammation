const selector = document.getElementById("gameSelector");
const frame = document.getElementById("gameFrame");

fetch("games.json")
  .then(res => res.json())
  .then(files => {
    const games = files.map(file => ({
      name: file.replace(".sb3", "").replace(/_/g, " "),
      url: `${file}`
    }));

    games.forEach(game => {
      const option = document.createElement("option");
      option.value = game.url;
      option.textContent = game.name;
      selector.appendChild(option);
    });

    function loadGame(url) {
      const fullUrl = `${location.origin}/${url}`;
      frame.src = `https://turbowarp.org/editor?project=${encodeURIComponent(fullUrl)}&fullscreen`;
    }

    selector.addEventListener("change", e => {
      loadGame(e.target.value);
    });

    if (games.length > 0) loadGame(games[0].url);
  });
