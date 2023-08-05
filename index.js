const BASE_URL = "https://swapi.dev/api/films";

const cssPromises = {};

export function loadResource(src) {
  if (src.endsWith(".js")) {
    return import(src);
  }
  if (src.endsWith(".css")) {
    if (!cssPromises[src]) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = src;
      cssPromises[src] = new Promise((resolve) => {
        link.addEventListener("load", () => resolve());
      });
      document.head.append(link);
    }
    return cssPromises[src];
  }
  return fetch(src).then((res) => res.json());
}

const appContainer = document.getElementById("app");

function renderModule(moduleName, apiUrl, css) {
  Promise.all([moduleName, apiUrl, css].map((src) => loadResource(src)))
    .then(([pageModule, data]) => {
      return pageModule.render(data);
    })
    .then((renderedData) => {
      appContainer.innerHTML = "";
      appContainer.append(renderedData);

      const links = document.querySelectorAll(".btn-link");
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          history.pushState(null, "", link.getAttribute("href"));
          renderPage();
        });
      });

      const backButton = document.getElementById("backButton");
      if (backButton) {
        backButton.addEventListener("click", (e) => {
          e.preventDefault();
          history.pushState(null, "", "/");
          renderPage();
        });
      }
    });
}

function renderPage() {
  const searchParams = new URLSearchParams(location.search);
  const episode = searchParams.get("episode");

  if (episode) {
    renderModule(
      "./episode-details.js",
      `${BASE_URL}/${episode}/`,
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
    );
  } else {
    renderModule(
      "./episodes-list.js",
      BASE_URL,
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
    );
  }
}

function initApp() {
  window.addEventListener("popstate", renderPage);
  renderPage();
}

initApp();
