// Liste des fichiers SB3 connus dans le dossier (automatique statique)
const sb3Files = [
  "Particle Accelerator.sb3",
  "jeu2.sb3",
  "autre.sb3"
];

// Générer une liste de jeux avec noms lisibles
const games = sb3Files.map(file => {
  return {
    name: file.replace(".sb3", "").replace(/_/g, " "),
    url: `https://votre-domaine.netlify.app/${file}`
  };
});

const selector = document.getElementById("gameSelector");
const frame = document.getElementById("gameFrame");

function loadGame(url) {
  frame.src = `https://turbowarp.org/editor?project=${encodeURIComponent(url)}&fullscreen`;
}

games.forEach(game => {
  const option = document.createElement("option");
  option.value = game.url;
  option.textContent = game.name;
  selector.appendChild(option);
});

selector.addEventListener("change", e => {
  loadGame(e.target.value);
});

loadGame(games[0].url);
