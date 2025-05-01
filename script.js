const selector = document.getElementById("gameSelector");
const frame = document.getElementById("gameFrame");

fetch("games.json")
  .then(res => res.json())
  .then(files => {
    const games = files.map(file => ({
      name: file.replace(".sb3", "").replace(/_/g, " "),
      url: `${location.origin}/${file}`
    }));

    games.forEach(game => {
      const option = document.createElement("option");
      option.value = game.url;
      option.textContent = game.name;
      selector.appendChild(option);
    });

    function loadGame(projectUrl) {
      const encodedUrl = encodeURIComponent(projectUrl);
      frame.src = `https://turbowarp.org/embed.html?project_url=${encodedUrl}`;
    }

    selector.addEventListener("change", e => {
      loadGame(e.target.value);
    });

    if (games.length > 0) loadGame(games[0].url);
  });
