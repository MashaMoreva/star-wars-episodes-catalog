import { loadResource } from "./index.js";

export async function render(data) {
  console.log(data);

  const planetsData = await Promise.all(
    data.planets.map((planetUrl) => loadResource(planetUrl))
  );
  const speciesData = await Promise.all(
    data.species.map((speciesUrl) => loadResource(speciesUrl))
  );
  const planets = planetsData.map((planet) => planet.name);
  const species = speciesData.map((specie) => specie.name);

  console.log(planets, species);
  const container = document.createElement("div");
  container.innerHTML = `
    <h2 class="mb-4">Episode ${data.episode_id}: ${data.title}</h2>
    <button class="btn btn-light mb-3" id="backButton">Back to episodes</button>
    <p class="fw-lighter">${data.opening_crawl}</p>
    <h4 class="text-decoration-underline">Planets</h2>
    <ul class="list-group list-group-flush">
    ${planets
      .map((planet) => `<li class="list-group-item fw-lighter">${planet}</li>`)
      .join("")}
    </ul>
    <h4 class="text-decoration-underline">Species</h4>
    <ul class="list-group list-group-flush">
    ${species
      .map((specie) => `<li class="list-group-item fw-lighter">${specie}</li>`)
      .join("")}
    </ul>
  `;

  return container;
}
