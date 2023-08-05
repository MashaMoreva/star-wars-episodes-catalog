export function render(data) {
  console.log(data);
  const container = document.createElement("div");
  container.classList.add("mx-auto");

  const header = document.createElement("h1");
  header.classList.add("mb-3");
  header.textContent = "Star Wars Episodes Catalog";

  const ul = document.createElement("div");
  data.results.forEach((episode, index) => {
    const link = document.createElement("a");
    ul.classList.add("list-group", "list-group-numbered");
    link.classList.add(
      "list-group-item",
      "list-group-item-action",
      "list-group-item-light"
    );
    link.href = `?episode=${index + 1}`;
    link.textContent = episode.title;

    ul.appendChild(link);
  });

  container.append(header, ul);

  return container;
}
